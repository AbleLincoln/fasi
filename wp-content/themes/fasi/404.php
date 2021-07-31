<?php
/**
 * The 404 page template.
 *
 * @package    WordPress
 * @subpackage fasi
 * @since      fasi 1.0
 */ 

get_header();

?>

	<main>
		<h1><?php _e( '404 - Not found.' ); ?></h1>
		<h2>
			<?php _e( 'We\'re sorry, but the page you are looking for cannot be found. What should you do at this point? Here are some options:', 'fasi' ); ?>
		</h2>
		<ul>
			<li><?php _e( 'If you typed in a URL, check that it is typed in correctly.', 'fasi' ); ?></li>
			<li><?php _e( 'Perhaps it was just a fluke, and if you try again by clicking refresh, it\'ll pop right up!', 'fasi' ); ?></li>
			<li><?php _e( 'Or head back to our home page', 'fasi' ); ?> <a
					href="<?php echo esc_url( home_url() ); ?>"><?php echo esc_url( home_url() ); ?></a> <?php _e( 'and navigate from there.', 'fasi' ); ?>
			</li>
		</ul>
	</main>

<?php

get_footer();
