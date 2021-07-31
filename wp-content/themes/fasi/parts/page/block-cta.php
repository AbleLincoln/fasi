<?php
/**
 * Block for CTA Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-cta';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$headline = get_sub_field('section_headline');
$content = get_sub_field('content');
?>

<section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
    <div class="container">
        <?php if ( ! empty( $headline ) || ! empty( $content ) ) : ?>
            <div class="row">
                <?php if ( ! empty( $headline ) ) : ?>
                    <div class="col-12">
                        <h2 class="h3"><?php echo $headline; ?></h2>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $content ) ) : ?>
                    <div class="col-12 col-lg-6">
                        <?php echo $content; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
