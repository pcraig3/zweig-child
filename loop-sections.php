<?php

//okay, so at this point we have the user-specified number of sections, which has to be a number and can't be less than zero.
$number_of_sections = get_field('acf_num', get_the_ID() );

//if we get hijacked by a smartass
if($number_of_sections > 20)
	$number_of_sections = 20;

for($i = 1; $i <= $number_of_sections; $i++) {

	$content_section = get_field('content_section_' . $i , get_the_ID() );

	if( $content_section !== false && ! empty( $content_section ) ) {

			echo do_shortcode( $content_section );
	}
}

?>