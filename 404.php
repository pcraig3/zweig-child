<?php get_header(); 

ob_start();

//@TODO: remove the logo?
?>
	
	<div class="layout__item one-third"></div><!--end of .layout__item.one-third

	--><div class="layout__item two-thirds">
		<div class="frame frame--archive">

			<p>Whoops, looks like there's even more nothing here than usual.</p>
			<p> Maybe try <a href="<?php echo get_site_url(); ?>">the home page</a>?</p>

		</div><!-- end of frame -->
	</div><!-- end of .layout__item.two-thirds -->

<?php 

$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_name='404' section_header_classes='full-width' back_to_top='true' ] " . $html_string . '[/section_skeleton]');

 get_footer(); ?>