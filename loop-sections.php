<?php

//okay, so at this point we have the user-specified number of sections, which has to be a number and can't be less than zero.
$array_of_section_numbers = get_field( 'acf_checkboxes', get_the_ID() );

//if somehow the ACFields get buggered up
if( empty ( $array_of_section_numbers ) )
	echo "<h3>Ugh, something's gone wrong with your custom checkboxes.  Have a look in the <code>page.php</code> file and the <code>loop-sections.php</code> file to get to the bottom of this.</h3>";

foreach( $array_of_section_numbers as $section_number ) {

	$content_section = get_field('content_section_' . $section_number , get_the_ID() );

	if( $content_section !== false && ! empty( $content_section ) ) {

		echo do_shortcode( $content_section );
	}
	
}

?>