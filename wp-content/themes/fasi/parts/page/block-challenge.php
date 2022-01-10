<?php

/**
 * Block for Challenge Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-challenge';
$spacing_class = ContentBlock::get_block_spacing_class();

if (!empty($spacing_class)) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = !empty($anchor_id) ? 'id="' . sanitize_title($anchor_id) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$image = get_sub_field('image');
$content = get_sub_field('content');
$stats = get_sub_field('stats');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <div class="container">
        <?php if (!empty($subhead) || !empty($headline)) : ?>
            <div class="block-challenge__headlines row">
                <div class="col-12 col-lg-7">
                    <?php echo !empty($subhead) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                    <?php echo !empty($headline) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                </div>
            </div>
        <?php endif; ?>
        <?php if (!empty($image) || !empty($content)) : ?>
            <div class="block-challenge__content row">
                <?php if (!empty($image)) : ?>
                    <div class="block-challenge__content-left col-12 col-lg-4 offset-lg-1">
                        <?php echo wp_get_attachment_image($image, 'challenge'); ?>
                        <?php $image_caption = wp_get_attachment_caption($image); ?>
                        <?php if (!empty($image_caption)) { ?>
                            <p class="image-caption"><?php echo esc_html($image_caption); ?></p>
                        <?php } ?>
                    </div>
                <?php endif; ?>
                <?php
                if (!empty($content)) :
                    $class = 'block-challenge__content-right col-12';
                    $class .= empty($image) ? ' col-lg-8' : ' col-lg-6';
                    $class .= empty($image) ? '' : ' offset-lg-1';
                ?>
                    <div class="<?php echo $class; ?>">
                        <?php echo $content; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        <?php if (!empty($stats)) : ?>
            <div class="block-challenge__stats row">
                <div class="col-12">
                    <?php
                    $count = 0;
                    foreach ($stats as $stat) :
                        $count++; ?>
                        <div class="block-challenge__stat">
                            <p>
                                <?php
                                if ($stat['icon']) {
                                    echo '<img class="stat-icon" src="' . $stat['icon'] . '" />';
                                }
                                echo '<span class="stat-container">';
                                echo '<span class="stat-full">';
                                echo $stat['before_stat'] ? '<span class="stat-before">' . $stat['before_stat'] . '</span>' : '';
                                echo '<span class="stat-number  js-stat-counter" id="fasi-stat-counter-' . $count . '" data-count-from="' . $stat['stat_count_from'] . '" data-count-to="' . $stat['stat'] . '">' . $stat['stat'] . '</span>';
                                echo $stat['after_stat'] ? '<span class="stat-after">' . $stat['after_stat'] . '</span>' : '';
                                echo '</span>';
                                echo '</span>';
                                echo '<span class="stat-content"> ' . $stat['content'] . '</span>';
                                ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>