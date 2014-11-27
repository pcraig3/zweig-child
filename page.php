<?php get_header(); 

/* conditional switch based on whether or not this page is a multi-section page */
if ( get_field( 'acf_checkboxes', get_the_ID() ) !== false )
	get_template_part('loop','sections'); 

else {

ob_start();

?>

	<div class="layout">

		<div class="layout__item one-third palm-one-whole"><!-- empty column --></div><!--end of .layout__item.one-third 

		--><div class="layout__item two-thirds palm-one-whole">
			<div class="frame frame--single">

				<?php get_template_part('loop','page'); ?>

			</div><!-- end of frame -->
		</div><!-- end of .layout__item.two-thirds -->

	</div><!-- end of .layout div-->

<?php


$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_header_classes='full-width' back_to_top='true' post_type='" . $post->post_type . "'] " . $html_string . '[/section_skeleton]');

} //end of initial 'if' loop

get_footer(); ?>