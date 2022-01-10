<?php

/**
 * The single post page template.
 *
 * @package    WordPress
 * @subpackage fasi
 * @since      fasi 1.0
 */

get_header();
the_post();

?>
<main class="page-content">
	<?php
	get_theme_part('page/hero');
	defaultContent();
	ContentBlock::display_theme_blocks();
	wp_link_pages();
	?>
</main>
<?php
get_footer();
