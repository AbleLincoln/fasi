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
<main class="page-content"><?php
		get_theme_part('staff/hero');
		get_theme_part('staff/content');
?></main>

<?php
get_footer();
