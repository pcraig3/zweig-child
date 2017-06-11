<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class('category'); ?>>
        <header class="entry-header">
            <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Link to','zweig'); ?> <?php the_title_attribute(); ?>">
                <h2 class="entry-title"><?php the_title(); ?></h2>
                <?php if ( has_excerpt( get_the_id() ) ) { ?>
                    <div class="entry-meta">
                        <?php the_excerpt(); ?>
                    </div>
                <?php } ?>
            </a>
        </header>

        <!--div class="entry-summary">
            < php the_excerpt(); ?>
        </div><!-- .entry-summary -->
	 </article>

	 <!-- Stop The Loop (but note the "else:" - see next line). -->
	 <?php endwhile; else: ?>

	 <!-- The very first "if" tested to see if there were any Posts to -->
	 <!-- display.  This "else" part tells what do if there weren't any. -->
	 <p><?php _e('Sorry, no posts matched your criteria.','zweig'); ?></p>

	 <!-- REALLY stop The Loop. -->

<?php endif; ?>