<?php get_header(); 

ob_start();

?>

<div class="layout">

	<div class="layout__item one-third palm-one-whole"><!-- empty column --></div><!--end of .layout__item.one-third 

	--><div class="layout__item two-thirds palm-one-whole">
		<div class="frame frame--single">

			<?php get_template_part('loop','single'); ?>

		</div><!-- end of frame -->
	</div><!-- end of .layout__item.two-thirds -->

</div><!-- end of .layout div-->

<?php

$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_header_classes='full-width' back_to_top='true' post_type='" . $post->post_type . "'] " . $html_string . '[/section_skeleton]');

 get_footer(); ?>