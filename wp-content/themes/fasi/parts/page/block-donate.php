<?php
/**
 * Block for Donate Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-donate';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$image = get_sub_field('image');
$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$content = get_sub_field('content');
$button_headline = get_sub_field('button_headline');
$button = get_sub_field('button');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <?php if ( ! empty( $image ) ) : ?>
        <div class="block-donate__image">
            <?php echo wp_get_attachment_image( $image, 'challenge' ); ?>
            <?php $image_caption = wp_get_attachment_caption($image); ?>
            <?php if ( ! empty( $image_caption ) ) { ?>
                <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
            <?php } ?>
        </div>
    <?php endif; ?>
    <div class="container">
        <div class="row">
            <?php if ( ! empty( $subhead ) || ! empty( $content ) ) : ?>
                <div class="block-donate__content col-12 col-lg-6">
                    <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                    <?php echo ! empty( $headline ) ? '<h2>' . $headline . '</h2>' : ''; ?>
                    <?php echo $content; ?>
                </div>
            <?php endif; ?>
            <?php if ( ! empty( $headline ) || ! empty( $button ) ) : ?>
                <div class="block-donate__button col-12 col-lg-5 offset-lg-1">
                    <?php echo ! empty( $button_headline ) ? '<h3 class="h2">' . $button_headline . '</h3>' : ''; ?>
                    <?php 
                    $block_button = array(
                        'url'    => $button['url'],
                        'title'  => $button['title'],
                        'target' => $button['target'],
                        'class'  => 'c-btn c-btn-primary'
                    );
                    echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                    ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
