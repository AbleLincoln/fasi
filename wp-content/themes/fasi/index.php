<?php
/**
 * The main template file.
 *
 * @package    WordPress
 * @subpackage fasi
 * @since      fasi 1.0
 */

get_header();

// $tax_conditions = is_tax() || is_category();
// $heading_text = get_blog_heading();
// $post_type = get_post_type();
// $taxonomy = $tax_conditions ? get_queried_object()->taxonomy : NULL;
// $term_id = $tax_conditions ? get_queried_object()->term_id : NULL;
?>

	<main class="page-content"><?php
	$page_for_posts = get_option( 'page_for_posts' );
	get_theme_part('page/hero', ['post_id' => $page_for_posts]);
	get_theme_part('news/content');
	?></main>

<?php
get_footer();
