jQuery(function( $ ){

    $(document).ready(function() {

        var utils = $.Utils();
        var $body = $('body');

        var opacity = .95;
        var header_title = {

            class: "chardinjs-site-meta",
            style__desk: [ "left:100%" ],
            style__mobile: [ "left:36px", "top:" + get_site_logo_height() + "px" ],
            style: function() {

                return utils.is_mobile() ? this.style__mobile : this.style__desk;
            }
        };

        var header_desc = {

            class: "site-logo-description",
            style__desk: [ "left:0", "top:200px", "bottom:auto" ],
            style__mobile: [ "left:0", "top:246px", "bottom:auto" ],
            style: function() {

                return utils.is_mobile() ? this.style__mobile : this.style__desk;
            }
        };

        /**
         * simple function returns height of the logo, minus 2 px, because that's been a consistent feature.
         * @returns  slightly altered height of logo
         */
        function get_site_logo_height() {

            return $body.find('#site-logo a').first().height() - 2;
        }

        //'click event handler on .chardinjs elements starts chardinjs
        $body.find('.chardinjs').on('click', function(e){

            //calling this so that the chardinJs element is created and attached to the body.
            $body.chardinJs('refresh');

            $.fn.extend(true, $body.data('chardinJs'), extensionMethods);

            $body.chardinJs('start');

            e.preventDefault();
        });

        $body.on('chardinJs:start', function() {

            overrideOpacity(opacity);

            if( utils.is_mobile() ) {
                saveInlineStyles(header_title);
                saveInlineStyles(header_desc);
            }

            overrideInlineStyles( header_title );
            overrideInlineStyles( header_desc );
            $body.chardinJs('refresh');
        });


        $(window).resize(function() {

            if( utils.if_mobile_changed() ) {

                saveInlineStyles( header_title );
                saveInlineStyles( header_desc );

                overrideInlineStyles(header_title);
                overrideInlineStyles(header_desc);
                $body.chardinJs('refresh');
            }
        });

        /**
         * function overrides default opacity (.8) set by the @heekhook guy.
         * @param opacity       a decimal between 0 and 1
         * @returns timeout function overrides default opacity
         */
        function overrideOpacity( opacity ) {

            return setTimeout(function() {

                var overlay = document.getElementsByClassName('chardinjs-overlay')[0];
                var styleText = overlay.getAttribute('style');

                //"opacity: .8;opacity: .8;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';filter: alpha(opacity=80);";
                styleText = styleText.replace(/city: [0]*\.8/g, 'city: ' + opacity);
                styleText = styleText.replace(/city=80/g, 'city=' + (opacity * 100));

                return overlay.setAttribute('style', styleText);
            }, 10);
        }

        /**
         * function overrides existing inline styles with ones we specify upfront.
         *
         * @param header_obj    special header object for controlling our header overlay tooltips.
         */
        function overrideInlineStyles( header_obj ) {

            $( '.' + header_obj.class).each( function( index, element ){

                $body.data('chardinJs')._set_tooltip_style(
                    $(this).find('.chardinjs-tooltip')[0],
                    header_obj.style().join(";")
                );
            });
        }

        /**
         * function preserves existing inline styles that we don't want to overwrite.
         *
         * @param header_obj    special header object for controlling our header overlay tooltips.
         */
        function saveInlineStyles( header_obj ) {

            $( '.' + header_obj.class).each( function( index, element ){

                var current_style = $body.data('chardinJs')._get_inline_style_array(
                    $(this).find('.chardinjs-tooltip')[0]
                );

                if( utils.is_mobile() )
                    header_obj.style__desk =
                        $body.data('chardinJs')._combine_inline_css(
                            header_obj.style__desk,
                            current_style
                        );

                else
                    header_obj.style__mobile =
                        $body.data('chardinJs')._combine_inline_css(
                            header_obj.style__mobile,
                            current_style
                        );

                $(this).find('.chardinjs-tooltip')[0].setAttribute('style', '');
            });
        }

        var extensionMethods = {

            /**
             * The only thing I wanted added to chardinJs: some way to relate tooltips to the elements
             * they came from
             *
             * @param element       the element receiving the tooltip
             * @returns {string}    input element's label, or classnames prepended with 'chardin-js-' or nothing
             * @private
             */
            _get_label : function(element) {

                return element.getAttribute('data-chardinjs-label') ?
                    ' '.concat(element.getAttribute('data-chardinjs-label')) :
                    element.getAttribute('class') ?
                        ' '.concat(element.getAttribute('class')).replace(/ /g, ' chardinjs-') : '';
            },

            /**
             * Hacky function that overwrites conflicting attribute values, adds ones that aren't set,
             * and leaves alone the ones that don't need to be overwritten
             *
             * @param tooltip       the tooltip is the element whose inline style we actually want to override
             * @param attributes    a string of array of new attributes, ex: "left:4px;style:font-size=24em"
             * @private
             */
            _set_tooltip_style : function(tooltip, attributes) {

                if(!attributes)
                    return;

                attributes = attributes.split(';');
                var old_attributes = this._get_inline_style_array(tooltip);

                tooltip.setAttribute(
                    'style',
                    (this._combine_inline_css(attributes, old_attributes)).join(';')
                );
            },

            _get_inline_style_array : function (element) {

                var inline_style = element.getAttribute('style');

                return (inline_style) ? inline_style.split(';') : [];
            },

            _combine_inline_css: function(attributes, old_attributes) {

                for (var i = 0; i < attributes.length; i++) {

                    var attr = attributes[i].split(':');
                    if( attr.length === 2 ) {

                        for (var j = 0; j < old_attributes.length; j++) {

                            var old_attr = old_attributes[j].split(':');
                            if( old_attr.length === 2 ) {

                                if (old_attr[0].trim() === attr[0].trim()) {

                                    old_attributes[j] = attr.join(':');
                                    attributes.splice(i, 1);

                                    j = old_attributes.length;
                                    i--;
                                }
                            }
                        }
                    }
                }

                return (this._format_style_string(old_attributes.join(';') + ';' + attributes.join(';'))).split(';');
            },

            _format_style_string : function(str) {

                //remove all whitespace
                str = str.replace(/\s/g, '');
                //remove duplicate semicolons
                str = str.replace(/;;/g, ';');
                //add whitespace
                str = str.replace(/;/g, '; ');

                return str.trim();
            },

            /**
             * Overwrites the _show_element method in chardin.js so as to change one line.
             * Pretty brittle stuff, if we're being honest with each other.
             * @param element       element with chardin.js metadata
             * @returns {string}    classname or position or something
             * @private
             */
            _show_element : function(element) {
                var current_element_position, element_position, helper_layer, tooltip_layer;

                element_position = this._get_offset(element);

                helper_layer = document.createElement("div");
                tooltip_layer = document.createElement("div");
                $(element).data('helper_layer', helper_layer).data('tooltip_layer', tooltip_layer);
                if (element.id) {
                    helper_layer.setAttribute("data-id", element.id);
                }
                helper_layer.className = "chardinjs-helper-layer chardinjs-" + (this._get_position(element)) + this._get_label(element);;
                this._position_helper_layer(element);
                this.$el.get()[0].appendChild(helper_layer);
                tooltip_layer.className = "chardinjs-tooltip chardinjs-" + (this._get_position(element));
                tooltip_layer.innerHTML = "<div class='chardinjs-tooltiptext'>" + (element.getAttribute('data-intro')) + "</div>";
                helper_layer.appendChild(tooltip_layer);
                this._place_tooltip(element);
                element.className += " chardinjs-show-element";
                current_element_position = "";
                if (element.currentStyle) {
                    current_element_position = element.currentStyle["position"];
                } else {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        current_element_position = document.defaultView.getComputedStyle(element, null).getPropertyValue("position");
                    }
                }
                current_element_position = current_element_position.toLowerCase();

                this._set_tooltip_style(tooltip_layer, element.getAttribute('data-chardinjs-tooltip-style'));

                if (current_element_position !== "absolute" && current_element_position !== "relative") {
                    return element.className += " chardinjs-relative-position";
                }
            }

        };
    });
});
