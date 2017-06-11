<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
            <h1 class="entry-title">
                <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Link to','zweig'); ?> <?php the_title_attribute(); ?>">
                    <?php the_title();

                    /*if( has_excerpt( get_the_id() ) )
                    echo ": " . get_the_excerpt();*/
                    ?>
                </a>
            </h1>

            <?php if ( has_excerpt( get_the_id() ) ) { ?>
                <div class="entry-meta">
                    <?php the_excerpt(); ?>
                </div>
            <?php } ?>

        </header>

        <!-- Display the Post's Content in a div box. -->
		 <div class="entry-content">
		   <?php the_content(); ?>
		 </div>

        <?php
            if ( is_single() ) {

        get_template_part('loop', 'accoutrements');

            } else { ?>

        </article>

        <?php } ?>

	 <!-- CALL THE COMMENTS TEMPLATE -->
	 <div id="comments" class="comments-area">
	 <?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || '0' != get_comments_number() )
					comments_template();
	?>
	</div>


	 <!-- Stop The Loop (but note the "else:" - see next line). -->
	 <?php endwhile; else: ?>

	 <!-- The very first "if" tested to see if there were any Posts to -->
	 <!-- display.  This "else" part tells what do if there weren't any. -->
	 <p><?php _e('Sorry, no posts matched your criteria.','zweig'); ?></p>

	 <!-- REALLY stop The Loop. -->

<?php endif; ?>