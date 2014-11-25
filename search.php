<?php get_header(); 

ob_start();

global $wp_query;

$found_posts = $wp_query->found_posts;

$found_posts_string = ( intval( $found_posts ) === 0 ) ? 'no' : $found_posts;
$found_posts_string .= ( intval( $found_posts ) === 1 ) ? ' result' : ' results';

?>

	<div class="layout__item one-third">
		
	<?php if( ! empty( $found_posts_string ) ) ?>
		<div class="frame__title pv--"><h3 class="subhead"><?php echo $found_posts_string; ?></h3></div>

	</div><!--end of .layout__item.one-third

	--><div class="layout__item two-thirds">
		<div class="frame frame--archive">

			<?php get_template_part('loop','excerpt'); ?>

			<div class="posts-nav">
				<?php posts_nav_link(); ?>
			</div>

		</div><!-- end of frame -->
	</div><!-- end of .layout__item.two-thirds -->

<?php 

$html_string = ob_get_clean();

$search_query = $wp_query->query_vars['s'];
//$page_title = 'search("' . $search_query . '")';

echo do_shortcode( "[section_skeleton section_name='" . $search_query . "' section_header_classes='full-width relative' back_to_top='true' search='true'] " . $html_string . '[/section_skeleton]');

 get_footer(); ?>