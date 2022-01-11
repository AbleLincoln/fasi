<?php

/**
 * Block for Accordion Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-accordion';
$spacing_class = ContentBlock::get_block_spacing_class();

if (!empty($spacing_class)) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = !empty($anchor_id) ? 'id="' . sanitize_title($anchor_id) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$content = get_sub_field('content');
$accordion = get_sub_field('accordion');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <div class="container">
        <div class="row">
            <?php if (!empty($subhead) || !empty($headline) || !empty($content)) : ?>
                <div class="block-accordion__content col-12">
                    <?php echo !empty($subhead) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                    <?php echo !empty($headline) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    <?php echo !empty($content) ? $content : ''; ?>
                </div>
            <?php endif; ?>
            <?php if (!empty($accordion)) : ?>
                <div class="block-accordion__accordion-container col-12">
                    <div class="block-accordion__accordion">
                        <?php
                        $count = 0;
                        foreach ($accordion as $item) {
                            $count++;
                        ?>
                            <div class="block-accordion__accordion-item">
                                <div class="block-accordion__accordion-item-title">
                                    <button><?php echo $item['title']; ?></button>
                                </div>
                                <div class="block-accordion__accordion-item-content">
                                    <?php echo $item['content']; ?>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>