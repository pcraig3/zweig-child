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

    <div class="site-meta" data-chardinjs-label="just-watch-me"
         data-intro="Paul Craig is a person on the internet."
         data-position="right"
        >
        <h1 id="site-logo">
            <a
                class="logo-link"
                data-intro="An awesome 18th-century painter, who found beauty in everyday, common things."
                data-position="bottom"
                href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php echo $blog_title = get_bloginfo('name'); ?>
            </a>
        </h1>
        <!--h2 id="site-description"><?php //echo $blog_title = get_bloginfo('description'); ?></h2-->

    </div><!-- end of .site-meta -->

    <div class="clearer"></div>

</header>

<div class="wrapper">
