    <div class="entry-pages">
        <?php wp_link_pages(); ?>
    </div>

    <div class="entry-meta">
        <?php echo get_the_tag_list('<p><strong>Tags</strong> : ',', ','</p>');?>
    </div>

    <div class="entry-navigation">
        <div class="alignright"><?php next_post_link(); ?> </div>
        <div class="alignleft"><?php previous_post_link(); ?> </div>
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