<?php

/*
 	@TODO: Get rid of this. It's hideous.
 */
add_filter('theme_root_uri', 'whatever_method');
function whatever_method( $theme_root_uri ) {

	$parsed_url = parse_url( $theme_root_uri );

	if( $parsed_url !== false ) {
		
		if( endsWith( $parsed_url['host'], '.dev' ) || endsWith( $parsed_url['host'], '.10' ) ) 
			//strip leading slashes, because the $parsed_url['path'] is coming in as '//app/themes/'
			return $parsed_url['scheme'] . '://' .  $parsed_url['host'] . '/web/' . ltrim( $parsed_url['path'], '/') ;

		if( endsWith( $parsed_url['host'], '.ca' ) ) 
			return $parsed_url['scheme'] . '://' .  $parsed_url['host'] . '/current/web' . $parsed_url['path'];
	}

	return $theme_root_uri;
}

/** errrip 

 @see http://stackoverflow.com/questions/834303/startswith-and-endswith-functions-in-php
 */
function startsWith($haystack, $needle)
{
    return $needle === "" || strpos($haystack, $needle) === 0;
}
function endsWith($haystack, $needle)
{
    return $needle === "" || substr($haystack, -strlen($needle)) === $needle;
}

?>