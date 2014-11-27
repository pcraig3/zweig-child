<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">

<meta charset="<?php bloginfo('charset'); ?>">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title><?php wp_title(''); ?></title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<?php wp_head(); ?>

</head>

<body <?php body_class();?> >

	<header id="site-header" class="full-height">

			<div class="site-meta">
			 <h1 id="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php echo $blog_title = get_bloginfo('name'); ?></a></h1>
			 <!--h2 id="site-description"><?php //echo $blog_title = get_bloginfo('description'); ?></h2-->

			</div>

	<?php
	ob_start();
	?>
	
		<div class="layout__item one-third">


		</div><!--end of .layout__item.one-third 

		--><div class="layout__item two-thirds">

				<div class="intimate-details">

				<p>Paul Craig</p>
				<p>Email Address</p>
				<p>Twitter Address</p>
				<p><a href="#back_to_top">Down to 'top'</a></p>
			
				 <!--nav> HA! Take that, conventions!
						<?php /* wp_nav_menu( 
						array( 
							'theme_location' => 'header', 
							'menu_class' => 'nav-menu',
							'fallback_cb'     => '__return_false', ) ); 
						*/ ?>		 
				</nav-->

				</div><!-- end of .intimate-details -->

		</div><!--end of .layout__item.two-thirds -->

	<?php


$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_header_classes='full-width pt0' layout_classes='layout--flush full-height pb+ palm-pb' section_name='about'] " . $html_string . '[/section_skeleton]');
?>

	<div class="clearer"></div>

	</header>

	<div class="wrapper">
