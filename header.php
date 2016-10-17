<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">

    <meta charset="<?php bloginfo('charset'); ?>">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?php wp_title(''); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>

</head>

<body <?php body_class();?> tabindex="-1">

<header id="site-header">
    <div class="site-meta" id="chardinjs--contact"
         data-intro="::contact"
         data-position="right">
        <h1 id="site-logo">
            <a
                href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <?php echo $blog_title = get_bloginfo('name'); ?>
            </a>
        </h1>
        <!--h2 id="site-description"><?php //echo $blog_title = get_bloginfo('description'); ?></h2-->

    </div><!-- end of .site-meta -->

    <?php
    ob_start();
    ?>

    <div id="chardinjs--description"
         class="layout__item one-whole"
         data-intro="Get @ me, yo.
            <br><br>I'm
            <a target='_blank' href='mailto:paul@pcraig3.ca'>mailable</a>,
            <a target='_blank' href='https://twitter.com/pcraig3'>tweetable</a>,
            <a target='_blank' href='https://github.com/pcraig3'>forkable</a>, and
            <a target='_blank' href='https://www.facebook.com/PaulMCraig'>facebookable</a>.
            <br>There're a few others as well, but let's not get ahead of ourselves."
         data-position="bottom">
    </div><!--end of .layout__item.one-whole -->

    <div id="chardinjs--get-that-overlay-outta-here"
         data-intro="<a class='fade-to-solid chardinjs--stop' href='#' title='back back back back back'><i class='icon-double-angle-left'></i></a>"
         data-position="right">
    </div><!--end of .layout__item.one-whole -->


    <?php
    $html_string = ob_get_clean();
    echo do_shortcode( "[section_skeleton section_header_classes='full-width not-displayed' layout_classes='layout--flush p0 not-height'] " . $html_string . '[/section_skeleton]');
    ?>

    <div class="clearer"></div>

</header>

<div class="wrapper">
