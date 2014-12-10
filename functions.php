<?php 

/*
 * @see : http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme
 *
add_action( 'wp_enqueue_scripts', 'zw_ch_enqueue_parent_theme_style' );
function zw_ch_enqueue_parent_theme_style() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
*/
/**
 * Proper way to enqueue scripts and styles
 */
add_action( 'wp_enqueue_scripts', 'zw_ch_enqueue_grunt_scripts' );
function zw_ch_enqueue_grunt_scripts() {

  //pure javascript
  wp_enqueue_script( 'zw_ch_initjs', get_stylesheet_directory_uri() . '/js/build/init.min.js', array() ); 

  //vendor scripts and my scripts concatenated by grunt
  wp_enqueue_script( 'zw_ch_prodjs', get_stylesheet_directory_uri() . '/js/build/prod.min.js', array('jquery') );

  if( is_search() )
      wp_enqueue_script( 'zw_ch_searchjs', get_stylesheet_directory_uri() . '/js/build/search.min.js', array('jquery') );
}


/**
 * [zw_ch_register_menus description]
 * @return [type] [description]
 *
 * @see  http://codex.wordpress.org/Navigation_Menus
 */
function zw_ch_register_menus() {
  register_nav_menus(
    array(
      'header' => __( 'Header Menu', 'zw-ch' ),
      'footer' => __( 'Footer Menu', 'zw-ch' )
    )
  );
}
add_action( 'init', 'zw_ch_register_menus' );

/**
 * [zw_ch_unregister_sidebars description]
 * @return [type] [description]
 */
function zw_ch_unregister_sidebars(){

  // Unregister the third widget sidebar added by the parent theme
  unregister_sidebar( 'footer-three' );
}
add_action( 'widgets_init', 'zw_ch_unregister_sidebars', 11 );

/**
 * shortcode function generates columns based on the inuitcss framework
 * 
 * @param  array $atts    attributes included with this shortcode
 * @param  string $content  any content in the middle of the shortcode
 * @return array            return some generated HTML columns for inuit css
 */
function zw_ch_inuitcss_column( $atts, $content = null ) {

    $atts = shortcode_atts( array(
        'fraction' => 'one-whole',
        'additional_classes' => '',
    ), $atts );

    //If ever we wanted to add some checking.
    if( false )
      return '<p>Sorry, but your fraction is invalid.  Column could not be generated.  Please seach for the  \'#WIDTHS\' heading in the css file in the page source for acceptable fractions.</p>';

    $no_content = zw_ch_return_if_empty( $content );

    $classnames = esc_attr( trim( $atts['fraction'] ) . ' ' 
      . trim( $atts['additional_classes'] ) );

    /* Build the HTML string */
    $html_string = '<div class="layout__item ' . $classnames . '">';

    if( $no_content )
      $html_string .= '<!-- empty column -->';
    else
      $html_string .= do_shortcode($content);

    $html_string .= '</div><!--end of .layout__item.' . $atts['fraction'] . ' -->';

    return $html_string;


}
add_shortcode( 'inuitcss_column', 'zw_ch_inuitcss_column' );

/**
 * simply utility function accepts a string, trims it, 
 * and then returns whether the result is empty or not.
 * 
 * @param  string $string   an input string to test for content
 * @return boolean          true if trimmed string is empty, false otherwise
 */
function zw_ch_return_if_empty( $string ) {

  $trimmed_string = trim( $string );

  if( empty( $trimmed_string  ) ) 
    return true;

  return false;
}


/**
 * shortcode function that returns a list of posts and then calls the excerpt 
 * template to display them on the screen.  
 * Needs to be refactored because we knowingly override the global wp_query variable in 
 * order to reuse the template's code.
 * 
 * @param  array $atts    attributes included with this shortcode
 * @param  string $content  any content in the middle of the shortcode
 * @return array            return just what you get, for now.
 */
function zw_ch_bad_practice_post_listing( $atts, $content = null ) {

    $atts = shortcode_atts( array(
      //get the default numbe of posts per page for the blog.  Overwrite them if you want though
        'posts_per_page' => get_option( 'posts_per_page', 10 ),
        'post_type' => 'post',
    ), $atts );

    $args = array(
    'post_type' => $atts['post_type'],
    'posts_per_page' => $atts['posts_per_page'] );

    global $wp_query;

    /* @TODO: I understand that this is bad practice, but it's super helpful to reuse an existing template */
    //http://www.poststat.us/properly-reset-wordpress-query/
    $this_is_bad = $wp_query;

    $wp_query = new WP_Query( $args );

    ob_start();
  get_template_part('loop', 'excerpt');  
  $post_listing = ob_get_clean();

  $wp_query = $this_is_bad;
  wp_reset_query();

  return $post_listing;
}
add_shortcode( 'post_listing', 'zw_ch_bad_practice_post_listing' );

/**
 * shortcode function generates sections with respective headers 
 * 
 * @param  array $atts      attributes included with this shortcode
 * @param  string $content  any content in the middle of the shortcode
 * @return array            return some generated HTML columns for inuit css
 */
function zw_ch_section_skeleton( $atts, $content = null ) {

    $atts = shortcode_atts( array(
        'section_classes' => '',
        'layout_classes' => 'layout--flush full-height pb+ palm-pb',
        'section_header_classes' => 'full-width',
        'section_name' => '',
        'section_header_link' => '',
        'post_type'   => '',
        'back_to_top' => false,
        'search' => false,

    ), $atts );

    //if there is a post type
    if( ! empty( $atts['post_type'] ) ) {
      $atts['section_header_link'] = zw_ch_if_post_type_archive( $atts['post_type'] );

      //if there is no section name
      if( empty( $atts['section_name'] ) ) {

        $obj = get_post_type_object( $atts['post_type'] );
        $atts['section_name'] = strtolower( $obj->labels->name );

        //if there is also no part type archive
        if( empty( $atts['section_header_link'] ) ) 
          $atts['section_header_classes'] .= ' hidden';
        
      }
      //if there is a name, but no link
      else {

          $atts['section_header_link'] = '/' . $atts['section_name'];
      }
    }
    

    $no_content = zw_ch_return_if_empty( $content );
    $no_link = zw_ch_return_if_empty( $atts['section_header_link'] );

    $section_classes = esc_attr( $atts['section_classes'] );
    $layout_classes = esc_attr( $atts['layout_classes'] );
    $section_header_classes = esc_attr( $atts['section_header_classes'] );
    $section_name = esc_attr( $atts['section_name'] );
    $back_to_top = ( $atts['back_to_top'] === '1' || $atts['back_to_top'] === 'true' );
    $search = ( $atts['search'] === '1' || $atts['search'] === 'true' );

    if( ! $no_link )
      $section_header_link = esc_url( $atts['section_header_link'] );

    if ( $search ) 
      $section_name = zw_ch_search_in_title( $section_name );
    

    /* Build the HTML string */

    ob_start();
    ?>

    <section class="fp-section <?php echo $section_classes; ?>">
        <div class="layout <?php echo $layout_classes; ?>">
          <div class="fp-section__header clearfix pb+ palm-pb0 <?php echo $section_header_classes; ?>" id="<?php

                if( $back_to_top )
                  echo "back_to_top";
                else
                  echo $section_name; 

                ?>">
                <div class="fp-section__header__spacer">h4ck</div><h2><a <?php 

                echo 'class="subtle-link ';

                echo ( ! $no_link ) ? 'solid-to-fade" ' : 'cursor-default" '; 

                if( ! $no_link )
                  echo 'href="' . $section_header_link . '" ';

                ?>
                >::<?php echo $section_name; ?></a></h2>
          </div><!-- end of .fp-section__header-->

          <?php echo do_shortcode( $content ); ?>

        </div><!-- end of .layout-->

    </section><!-- end of .fp-section-->
    <?php 

    return ob_get_clean();
}
add_shortcode( 'section_skeleton', 'zw_ch_section_skeleton' );

/**
 * Function that creates a search bar in the title if called upon.
 * (i.e., this happens on the 'Search' page in desktop mode)
 * 
 * @param  string $s  the last search query
 * @return string     the HTML code to generate the header search title
 */
function zw_ch_search_in_title( $s ) {

  ob_start();
  ?>search<span class="search__container">.("<form role="search" method="get" class="search-form search-form__title" action="">
        <label>
          <span class="screen-reader-text">Search for:</span>
          <input class="search-field" placeholder="search…" value="<?php echo $s; ?>" name="s" type="search" style="min-width:200px;width:200px;">
        </label><pre class="placeholder" style="display:none;"><?php echo $s; ?></pre>")<button type="submit" class="search-submit solid-to-fade"><i class="icon-search"></i></button>
      </form></span><?php 
  return ob_get_clean();
}

/**
 * function takes a string and returns its post type archive, if possible.
 * 'Posts' don't have an archive page as such, so we return the 'page_for_posts' page
 * in that specific case 
 * @param  string $post_type  a string, hopefully a post_type
 * @return string             url of the input post_type's archive, else an empty string
 */
function zw_ch_if_post_type_archive( $post_type ) {

  //@TODO: make sure this still works if the main page is the home page.
  if( $post_type === 'post' )
    return get_permalink( get_option( 'page_for_posts' ) );

  return get_post_type_archive_link( $post_type );
}


function zw_ch_caption_without_image( $atts, $content = null ) {

    /*
    $atts = shortcode_atts( array(

        'strip_tags' => 'default value',
    ), $atts );
    */
  
   $content = strip_tags ( $content );

  if( zw_ch_return_if_empty( $content ) )
    return false;

  ob_start();
  ?>

  <div id="attachment__<?php echo rand( 10000 , 20000 ); ?>" style="width: auto" class="wp-caption wp-caption--shortcode"><p class="wp-caption-text wp-caption-text--shortcode">
  <?php echo esc_html( trim( $content ) ); ?>
  </p></div>
  <?php

  return ob_get_clean();
}

add_shortcode( 'caption_without_image', 'zw_ch_caption_without_image' );