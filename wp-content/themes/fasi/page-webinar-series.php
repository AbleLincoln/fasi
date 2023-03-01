<?php

/**
 * The webinar-series page template.
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 2.0
 */

get_header();
the_post();
?>
<main class="page-content">
    hi here is my secret message
    <?php
    get_theme_part('page/hero');
    defaultContent();
    ContentBlock::display_theme_blocks();
    ?></main>
<?php
get_footer();
