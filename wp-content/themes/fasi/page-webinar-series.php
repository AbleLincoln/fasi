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
<main class="page-content webinar-series">
    <?php
    get_theme_part('page/hero');
    defaultContent();
    ContentBlock::display_theme_blocks();
    ?>


    <section class="block-content block-bottom-spacing" style="background-color:#001030;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-10 offset-lg-1">
                    <h4 style="color: #53d396; margin-top: 6rem; margin-bottom: 2rem;">Watch <span style="color: #ffffff;">Our Past Webinars</span></h4>

                    <?php
                    $posts = get_posts(array("numberposts" => -1, "category" => 17)); // the 'webinar' cat

                    foreach ($posts as $post) {
                        $id = $post->ID;
                        $video_iframe = get_field('video_thumbnail', $id);
                        $video_url = get_field('video_thumbnail', $id);
                        $thumbnail_url = get_the_post_thumbnail_url($post);
                    ?>
                        <div class="webinar-series__iframe-wrapper">
                            <?php echo $video_iframe; ?>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        </div>

        <p>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </p>
    </section>

</main>
<?php
get_footer();
