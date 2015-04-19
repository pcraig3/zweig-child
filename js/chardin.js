jQuery(function( $ ){

    $(document).ready(function() {

        var $body = $('body');
        //'click event handler on .chardinjs elements starts chardinjs
        $body.find('.chardinjs').on('click', function(e){

            //calling this so that the chardinJs element is created and attached to the body.
            $body.chardinJs('refresh');

            $.fn.extend(true, $body.data('chardinJs'), extensionMethods);

            $body.chardinJs('start');

            e.preventDefault();
        });


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

            //ie, attributes: "style,left:4px;style:font-size=24em"
            _set_tooltip_style : function(tooltip, attributes) {

                if(!attributes)
                    return;

                attributes = attributes.split(';');
                var old_attributes = tooltip.getAttribute('style').split(';');

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

                tooltip.setAttribute(
                    'style',
                    this._format_style_string(old_attributes.join(';') + ';' + attributes.join(';'))
                );

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
