<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php wp_title(''); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class();?> tabindex="-1">

<header id="masthead" class="site-header" role="banner">
    <div class="site-meta" id="chardinjs--contact"
         data-intro="::contact"
         data-position="right">
        <div id="site-logo">
            <a
                href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <?php echo $blog_title = get_bloginfo('name'); ?>
            </a>
        </div>
        <?php if ( is_front_page() ) { ?>
            <h1 class="page-title visually-hidden"><?php echo get_bloginfo('name') . ': ' . get_bloginfo('description'); ?></h1>
        <?php } ?>

    </div><!-- end of .site-meta -->

    <?php
    ob_start();
    ?>

    <div id="chardinjs--description"
         class="layout__item one-whole"
         data-intro="<p class='not_on_mobile--landscape'>Get @ me, yo.</p>
            <p>I'm
            <a target='_blank' rel='noopener noreferrer' href='mailto:paul@pcraig3.ca'>paul@pcraig3.ca</a>, and I'm also on
            <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/pcraig3'>twitter</a>,
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/pcraig3'>github</a>, and
            <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/PaulMCraig'>facebook</a>.
            <br>There're a few others as well, but let's not get ahead of ourselves.</p>"
         data-position="bottom">
    </div><!--end of .layout__item.one-whole -->

    <div id="chardinjs--get-that-overlay-outta-here"
         data-intro="<a type='button' class='fade-to-solid chardinjs--stop' href='#' title='back back back back back' aria-label='close'><i class='icon-double-angle-left'></i></a>"
         data-position="right">
    </div><!--end of .layout__item.one-whole -->


    <?php
    $html_string = ob_get_clean();
    echo do_shortcode( "[section_skeleton section_header_classes='full-width not-displayed' layout_classes='layout--flush p0 not-height'] " . $html_string . '[/section_skeleton]');
    ?>

    <div class="clearer"></div>

</header>

<div id="content" class="site-content">
    <main id="main" class="site-main" role="main">
