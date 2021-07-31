<?php
/**
 * Block for Allergy Numbers
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-allergy-numbers';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$image = get_sub_field('chart_image');
$content = get_sub_field('content');
$bottom_content = get_sub_field('bottom_content');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <div class="container">
        <?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $content ) ) : ?>
            <div class="block-allergy-numbers__headlines row">
                <div class="col-12 col-lg-7">
                    <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                    <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    <?php echo ! empty( $content ) ? $content : ''; ?>
                </div>
            </div>
        <?php endif; ?>
        <?php if ( ! empty( $image ) || ! empty( $bottom_content ) ) : ?>
            <div class="block-allergy-numbers__content row">
                <?php if ( ! empty( $image ) ) : ?>
                    <div class="col-12 col-lg-9">
                        <?php echo wp_get_attachment_image( $image, 'allergy-numbers' ); ?>
                        <?php $image_caption = wp_get_attachment_caption($image); ?>
                        <?php if ( ! empty( $image_caption ) ) { ?>
                            <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                        <?php } ?>
                        <div class="block-allergy-numbers__bottom-content">
                            <?php echo ! empty( $bottom_content ) ? $bottom_content : ''; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
