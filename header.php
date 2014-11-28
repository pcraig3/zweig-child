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

	<header id="site-header">

			<div class="site-meta">
			 <h1 id="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php echo $blog_title = get_bloginfo('name'); ?></a></h1>
			 <!--h2 id="site-description"><?php //echo $blog_title = get_bloginfo('description'); ?></h2-->

			</div>

	<?php
	ob_start();
	?>
	
		<div class="layout__item one-whole">

				<div class="intimate-details fancy-pants">

				<p><span class="not_on_mobile">There are a number of ways to get in touch, so here are the obvious ones: </span>I'm on <a href="https://www.facebook.com/PaulMCraig" target="_blank">the F-Book</a>, <a href="https://twitter.com/pcraig3" target="_blank">the Twitter</a>, <a href="https://github.com/pcraig3" target="_blank">the 'Hub</a> <span class="whisper">(as all the cool kids say)</span>, the <a href="mailto:paul@pcraig3.ca?subject=Hello%20Paul!">email</a>, and if you want my phone number, it's in my CV.</p>
				<span class="not_on_mobile"><p>I've even got a <a href="http://bookmooch.com/" target="_blank">BookMooch</a> profile, but I'm not going to give you that one.</p></span>
				<p>Oh, almost forgot!  I also have <a href="#back_to_top">my own website [<i class="icon-double-angle-down"></i>]</a>.</p>
			
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

echo do_shortcode( "[section_skeleton section_header_classes='full-width pt0' layout_classes='layout--flush pb+ palm-pb' section_name='contact'] " . $html_string . '[/section_skeleton]');
?>

	<div class="clearer"></div>

	</header>

	<div class="wrapper">
