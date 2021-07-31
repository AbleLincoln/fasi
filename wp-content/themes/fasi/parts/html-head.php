<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	<?php wp_head(); ?>
	
	<?php the_field( 'header_script', 'option' ); ?>
</head>
