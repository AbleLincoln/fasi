<?php

/**
 * Staff Content section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  1.0
 */

$education = get_field('education');
$affiliations = get_field('affiliations');
$quote = get_field('quote');
$content = get_the_content(get_the_ID());
$back_button_text = get_field('back_button_text');
$hide_back_button = get_field('hide_back_button');
$next_button_text = get_field('next_button_text');
?>

<section class="staff-single">
    <div class="container">
        <div class="row">
            <div class="staff-single__sidebar col-12 col-lg-3">
                <?php if (!empty($education)) : ?>
                    <div class="staff-single__sidebar-item">
                        <h2 class="p">Education</h2>
                        <ul class="staff-single__sidebar--education">
                            <?php
                            foreach ($education as $item) {
                                echo '<li>' . $item['degree'] . '<br />' . $item['university'] . '</li>';
                            }
                            ?>
                        </ul>
                    </div>
                <?php endif; ?>
                <?php if (!empty($affiliations)) : ?>
                    <div class="staff-single__sidebar-item">
                        <h2 class="p">Affiliations</h2>
                        <ul class="staff-single__sidebar--affiliations">
                            <?php
                            foreach ($affiliations as $item) {
                                echo '<li>' . $item['affiliation'] . '</li>';
                            }
                            ?>
                        </ul>
                    </div>
                <?php endif; ?>
            </div>
            <div class="staff-single__content col-12 col-lg-8 offset-lg-1">
                <?php if (!empty($quote)) : ?>
                    <blockquote>
                        <p class="h4"><?php echo $quote; ?></p>
                    </blockquote>
                <?php endif; ?>
                <?php the_content(); ?>
            </div>
            <div class="staff-single__navigation">
                <div class="staff-single__navigation-left col-12 col-lg-6">
                    <?php
                    if(!$hide_back_button) {
                        $prev_staff = get_next_post();
                        if (empty($prev_staff)) {
                            $staff_args = array(
                                'post_type' => 'staff',
                                'post_status' => 'publish',
                                'posts_per_page' => 1,
                                'order' => 'DESC'
                            );
                            $posts = get_posts($staff_args);
                            $prev_staff = isset($posts[0]) ? $posts[0] : false;
                        }
                        if (false !== $prev_staff) {
                            $block_button = array(
                                'url'    => get_permalink($prev_staff->ID),
                                'title'  => empty($back_button_text) ? 'Back: Meet ' . get_the_title($prev_staff->ID) : $back_button_text,
                                'target' => '_self',
                                'class'  => 'c-btn c-btn-secondary'
                            );
                            echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                        }
                    }
                    ?>
                </div>
                <div class="staff-single__navigation-right col-12 col-lg-6">
                    <?php
                    $next_staff = get_previous_post();
                    if (empty($next_staff)) {
                        $staff_args = array(
                            'post_type' => 'staff',
                            'post_status' => 'publish',
                            'posts_per_page' => 1,
                            'order' => 'ASC'
                        );
                        $posts = get_posts($staff_args);
                        $next_staff = isset($posts[0]) ? $posts[0] : false;
                    }
                    if (false !== $next_staff) {
                        $block_button = array(
                            'url'    => get_permalink($next_staff->ID),
                            'title'  => empty($next_button_text) ? 'Next: Meet ' . get_the_title($next_staff->ID) : $next_button_text,
                            'target' => '_self',
                            'class'  => 'c-btn c-btn-secondary'
                        );
                        echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>