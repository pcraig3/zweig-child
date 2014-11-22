<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<article itemtype="http://schema.org/BlogPosting"  id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		 <h1 itemprop="headline" class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Link to','zweig'); ?> <?php the_title_attribute(); ?>" itemprop="url"><?php the_title(); ?></a></h1>

		 <h2 class="post-date">
		 	<?php the_time('jS F, Y'); ?>
		 </h2>

		 <!-- Display the Post's Content in a div box. -->
		 <div class="entry" itemprop="articleBody">
		   <?php the_content(); ?>
		 </div>

	 	<div class="post-pages">
	 		<?php wp_link_pages(); ?>
	 	</div>

		<div class="post-meta">
			<?php echo get_the_tag_list('<p><strong>Tags</strong> : ',', ','</p>');?>
		</div>

    <div class="post-navigation">
    	<div class="alignleft"><?php previous_post_link(); ?> </div>
			<div class="alignright"><?php next_post_link(); ?> </div>
    	<div class="clearer"></div>
    </div>

	 </article>


  	<div class="author-box">

  		<div class="author-avatar">
  			<?php echo get_avatar( get_the_author_meta('email'), '800' ); ?>
  		</div>

  		<div class="author-description">
  			<p class="author-name"><strong><?php echo $author = get_the_author(); ?></strong></p>
  			<p><?php the_author_meta('description') ?></p>
  		</div>

  	</div>
  	<div class="clearer"></div>

	 <!-- CALL THE COMMENTS TEMPLATE -->
	 <div id="comments">
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