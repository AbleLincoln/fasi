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
    ?>


    <section class="block-content block-bottom-spacing" style="background-color:#001030;">
        <div class="container">
        </div>

        <?php
        $posts = get_posts(array("category" => "video"));

        foreach ($posts as $post) {
        ?>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-10 offset-lg-1">
                    <h4 style="color: #53d396; margin-top: 6rem; margin-bottom: 2rem;">Watch <span style="color: #ffffff;">Our Past Webinars</span></h4>
                    <div style="padding:56.25% 0 0 0;position:relative;">
                        <iframe src="https://player.vimeo.com/video/790953243?h=72eb8169de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="January Webinar 2023.mp4" data-ready="true" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        <?php } ?>
        <p>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </p>
    </section>

</main>
<?php
get_footer();
