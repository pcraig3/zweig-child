<?php get_header();

ob_start();

?>

<div class="layout">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <div class="layout__item one-whole">
        <div class="frame frame--splash fancy-pants">

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

                <!-- Display the Post's Content in a div box. -->
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

            </article>

        </div>
    </div>

    <?php endwhile; else: ?>

        <!-- The very first "if" tested to see if there were any Posts to -->
        <!-- display.  This "else" part tells what do if there weren't any. -->
        <p><?php _e('Sorry, no posts matched your criteria.','zweig'); ?></p>

        <!-- REALLY stop The Loop. -->

    <?php endif; ?>

</div>

<?php

$html_string = ob_get_clean();

echo do_shortcode( "[section_skeleton section_name='home' section_header_classes='full-width hidden' back_to_top='true'] " . $html_string . '[/section_skeleton]');

get_footer(); ?>
