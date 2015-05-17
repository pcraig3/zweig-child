<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	 <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Link to','zweig'); ?> <?php the_title_attribute(); ?>" itemprop="url"><article itemtype="http://schema.org/BlogPosting"  id="post-<?php the_ID(); ?>" <?php post_class('category'); ?>>

		<h1 itemprop="headline" class="post-title"><?php the_title(); ?></h1>

		 <h2 class="post-date">
		 	<?php the_time('F Y'); ?>
		 </h2>

	 </article></a>

	 <!-- Stop The Loop (but note the "else:" - see next line). -->
	 <?php endwhile; else: ?>

	 <!-- The very first "if" tested to see if there were any Posts to -->
	 <!-- display.  This "else" part tells what do if there weren't any. -->
	 <p><?php _e('Sorry, no posts matched your criteria.','zweig'); ?></p>

	 <!-- REALLY stop The Loop. -->

<?php endif; ?>