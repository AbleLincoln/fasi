<?php
/**
 * Block for Solution Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-solution';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$image = get_sub_field('image');
$content = get_sub_field('content');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <?php if ( ! empty( $image ) ) : ?>
        <div class="block-solution__image">
            <?php echo wp_get_attachment_image( $image, 'solution' ); ?>
            <?php $image_caption = wp_get_attachment_caption($image); ?>
            <?php if ( ! empty( $image_caption ) ) { ?>
                <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
            <?php } ?>
        </div>
    <?php endif; ?>
    <div class="container">
        <?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $content ) ) : ?>
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-6">
                    <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                    <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    <?php echo $content; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>
