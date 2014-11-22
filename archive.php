<?php 

/* function helps us set a title for our archive pages. */

global $wp_query;

$title = '';

if( is_date() ) {

	$year = $month = '';

	if( is_month() ) {

		$m = $wp_query->query_vars['m'];
		$monthnum = $wp_query->query_vars['monthnum'];

		$month = ( strlen( $m ) >= strlen( $monthnum ) ) ?  $m : $monthnum;

		if( strlen( $month ) == 6 ) {
			$year = substr($month, 0, 4);
			$month = substr($month, -2);
		}

		if( strlen( $month ) >= 4 ) {
			$year = substr($month, 0, 4);
			$month = '';
		}

		if( ! empty( $month ) ) {
			$dateObj   = DateTime::createFromFormat('!m', $month);
			$month = substr( $dateObj->format('F'), 0, 3); 
		}

		$title = $month . ' ' . $year;
	}
	else if( is_year() ) {

		$y = $wp_query->query_vars['m'];
		$yearnum = $wp_query->query_vars['year'];

		$year = ( strlen( $y ) >= strlen( $yearnum ) ) ?  $y : $yearnum;

		if( strlen( $year ) >= 4 ) {
			$year = substr($year, 0, 4);
		}

		$title = $year;
	}
}

if( is_author() ) 
	$title = 'author: ' . $wp_query->query_vars['author'];

if( is_category() )  {
	$title = 'category: ' . get_cat_name( $wp_query->query_vars['cat'] );
}

if( is_tag() )
	$title = 'tag: ' . $wp_query->query_vars['tag'];

if( is_tax() )
	$title = 'taxonomy: ' . $wp_query->query_vars['tax'];

/** End method **/

?>

<?php get_header(); 

ob_start();

?>

	<div class="layout__item one-third">
		
	<?php if( ! empty( $title ) ) ?>
		<div class="frame__title pv--"><h3 class="archive-title"><?php echo $title; ?></h3></div>

	</div><!--end of .layout__item.one-third

	--><div class="layout__item two-thirds">
		<div class="frame frame--archive ph pv--">

			<?php get_template_part('loop','excerpt'); ?>

			<div class="posts-nav">
				<?php posts_nav_link(); ?>
			</div>

		</div><!-- end of frame -->
	</div><!-- end of .layout__item.two-thirds -->

<?php 

$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_name='archive' section_header_classes='full-width' back_to_top='true'] " . $html_string . '[/section_skeleton]');

 get_footer(); ?>