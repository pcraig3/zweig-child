

  </div> <!-- EOF WRAPPER -->

  <footer id="footer" class="p0">

    <!-- back_to_top button is kept here in the footer -->
    <span class="back-to-top invisible"><a class="back-to-top__link fade-to-solid" href="#back_to_top"><i class="icon-double-angle-up"></i></a></span>
   
    <div class="layout layout--flush">

    <?php 

      //no widgets if a menu has been assigned
      //note that this means you can just use 'custom menu' widgets if'n you please
      if ( has_nav_menu( 'footer' ) ) { 

        echo '<div class="layout__item one-whole">';

        echo '<nav>';
        
        wp_nav_menu( 
            array( 
              'theme_location' => 'footer', 
              'menu_class' => 'nav-menu',
              'fallback_cb'     => '__return_false', 
              ) 
          ); 
            
        echo '</nav>';

        echo '</div><!--end of .layout__item-->';

      } //end of the 'has_nav_menu' if check
      else {
  
      ?>

    <div class="layout__item one-whole">


  	<div class="widget-area">
  	<?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer Area One')) : ?><?php endif; ?>
  	</div>


    </div><!-- end of .layout__item.one-third 
    --><div class="layout__item one-whole">

  	<div class="widget-area">
		<?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer Area Two')) : ?><?php endif; ?>
		</div>

    </div><!-- end of .layout__item.two-thirds -->

    <?php }  //end of the 'has_nav_menu' else check ?>


    </div><!--end of .layout -->

		<div class="clearer"></div>

  </footer>

<?php wp_footer(); ?>
</body>
</html>
