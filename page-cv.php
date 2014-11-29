<?php
/*
Template Name: CV
Description: A Page Template which emulates my resume.
*/
?>
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

	<div class="cv__wrapper">
		<header class="cv__header">
			<h1 class="cv__name cv__title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Paul Craig</a></h1>
			<h2 class="cv__description color__red">would be thrilled to code on a somewhat professional basis</h2>
			<div class="clearer"></div>

		</header><!-- end of .cv__header -->

		<div class="cv">
			<div class="layout">

			<div class="layout__item two-thirds palm-one-whole"><!--

				--><div class="layout col_1"><!--

		--><div class="cell cell--col_1"--><!--

			--><div class="layout__item one-whole">


			<h3 class="section__title">work</h3>
					</div><!--

			--><article class="job_description"><!--

				--><div class="layout__item one-fifth">


				<span class="job_description__year">2014</span>
					</div><!--
				--><div class="layout__item four-fifths">

					<h5 class="job_description__title">Web Developer</h5>
					<h6 class="job_description__employer"><a class="pseudo_href" href="http://westernusc.ca">Western University Students’ Council</a></h6>
					<p class="job_description__body">Commandeered a revitalization of the student government’s web presence</p>
					<p class="job_description__body">Prioritized the findings of user-centred research</p>
					<p class="job_description__body">Implemented, open-sourced, and extensively documented solutions</p>
					<p class="job_description__body">Incorporated several third-party APIs supplemented with clever data caching</p>
				
					</div><!--

			--></article><article class="job_description"><!--

				--><div class="layout__item one-fifth">

				<span class="job_description__year">2013-14</span>
					</div><!--
				--><div class="layout__item four-fifths">					

					<h5 class="job_description__title">Technical Infrastructure Intern</h5>
					<h6 class="job_description__employer"><a class="pseudo_href" href="http://westernusc.ca">Western University Students’ Council</a></h6>
					<p class="job_description__body">Designed and implemented various web-based software projects</p>
					<p class="job_description__body">Split time between front-end and back-end problems</p>
					<p class="job_description__body">Frequent Basecamp contributor, <code>git commit</code>-er</p>
					<p class="job_description__body">Worked always for the benefit of students at Western University</p>
			</div>
					<!--

			--></article><article class="job_description"><!--

				--><div class="layout__item one-fifth">
				<span class="job_description__year">2012-13</span>
					</div><!--
				--><div class="layout__item four-fifths">					

					<h5 class="job_description__title">Section Editor</h5>
					<h6 class="job_description__employer"><a class="pseudo_href" href="http://openwidezine.com">mitZine / OPENWIDE</a></h6>
					<p class="job_description__body">Authored numerous peer-reviewed feature-length articles</p>
					<p class="job_description__body">Participated in collaborative editing of mine and others' writing</p>
					<p class="job_description__body">Managed volunteer writers; kept Editor-in-Chief informed</p>
					</div><!--

			--></article><!--

		--></div><div class="cell cell--col_1"--><!--

										--><div class="layout__item one-whole">
										<h3 class="section__title">school</h3>
					</div><!--


			--></article><article class="job_description"><!--

					--><div class="layout__item one-fifth"></div><!--
				--><div class="layout__item four-fifths">					

					<h5 class="job_description__title"><a href="http://www.csd.uwo.ca">Computer Science</a></h5>
					<p class="job_description__body">Studied foundational data structures and algorithms</p>
					<p class="job_description__body">Worked frequently on team-based semester-long projects</p>
					</div><!--

			--></article><article class="job_description"><!--

					--><div class="layout__item one-fifth"></div><!--
				--><div class="layout__item four-fifths">

					<h5 class="job_description__title"><a href="http://www.fims.uwo.ca">Media, Information and Technoculture (MIT)</a></h5>
					<p class="job_description__body">Learned to communicate capably and professionally without losing my soul</p>
					<p class="job_description__body">Critically analyzed bloody everything</p>				
					</div><!--

				--></article><!--

		--></div><!--

				--></div><!-- end of .col_1 

			--></div><!-- end of .two-thirds 
			--><div class="layout__item one-third palm-one-whole"><!--

			--><div class="layout col_2"><!--

		--><div class="cell cell--col_2"--><!--

		--><div class="layout__item one-whole">
		<h3 class="section__title color__red">contact</h3>
			</div><!--
			--><div class="layout__item two-fifths"></div><!--
			--><div class="layout__item three-fifths">

					<a class="contact--body contact--email color__red" href="mailto:paul@pcraig3.ca?subject=Hello%20Paul!">paul@pcraig3.ca</a>
					<a class="contact--body" href="tel:+14163160999">(+1) 416.316.0999</a>
					<a class="contact--body" href="https://twitter.com/pcraig3">@pcraig3</a>
			</div><!--

		--></div><div class="cell cell--col_2"--><!--

		--><div class="layout__item one-whole">
		<h3 class="section__title">degree</h3>
			</div><!--

		--><article class="job_description"><!--

		--><div class="layout__item two-fifths">
		<span class="job_description__year">2014</span>
			</div><!--
		--><div class="layout__item three-fifths">


					<h5 class="job_description__title">Computer Science & MIT Double Major</h5>
					<a class="job_description__body" href="http://www.uwo.ca/">Western University</a>
					<p class="job_description__body">London, Canada</p>
		</div><!--

		--></article><!--

		--></div><div class="cell cell--col_2"--><!--

		--><div class="layout__item one-whole">
		<h3 class="section__title">familiar with</h3>
			</div><!--

			--><article class="job_description"><!--

			--><div class="layout__item two-fifths">
			<p class="job_description__body">PHP</p>
			<p class="job_description__body">HTML / Twig</p>
			<p class="job_description__body">SQL / Doctrine</p>
			<p class="job_description__body">C / C++</p>
			<p class="job_description__body">Version Control</p>
			<p class="job_description__body">CLIs</p>
			<p class="job_description__body">etc.</p>

			</div><!--
			--><div class="layout__item three-fifths">
			<p class="job_description__body">WordPress</p>
			<p class="job_description__body">CSS / SCSS</p>
			<p class="job_description__body">Java</p>
			<p class="job_description__body">JavaScript / JQuery</p>
			<p class="job_description__body">Package Managing</p>
			<p class="job_description__body">MVC Frameworks</p>
			</div><!--
			--></article><!--

		--></div><div class="cell cell--col_2"--><!--

		--><div class="layout__item one-whole">
		<h3 class="section__title">able to</h3>
			</div><!--
					--><article class="job_description"><!--

			--><div class="layout__item one-whole">

			<p class="job_description__body">construct / defend arguments</p>
			<p class="job_description__body">construct / maintain software</p>
			<p class="job_description__body">deliver presentations on either</p>
			<p class="job_description__body">work as part of a team</p>
			<p class="job_description__body">identify problems: technical or political</p>
			<p class="job_description__body">articulate myself perspicuously</p>

			</div><!--

		--></article><!--

		--></div><!--

			--></div><!-- end of .col_2

			--></div><!-- end of .one-third 
		--></div><!-- end of .layout -->
	</div><!-- end of .cv -->

	<footer class="cv__footer">
		<span class="cv__references">References available on request</span>
		<div class="clearer"></div>

	</footer><!-- end of .cv__footer -->
</div><!-- end of .cv__wrapper -->


<?php wp_footer(); ?>
</body>
</html>
