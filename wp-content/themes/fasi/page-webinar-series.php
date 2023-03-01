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
    <?php
    get_theme_part('page/hero');
    defaultContent();
    ContentBlock::display_theme_blocks();

    get_posts(array("category" => "video"));

    while (have_posts()) :
        the_post();


    ?>
        the post
    <?php endwhile; ?>

</main>
<?php
get_footer();
