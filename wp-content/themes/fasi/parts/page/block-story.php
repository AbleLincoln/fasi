<?php
/**
 * Block for Story Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-story';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$content = get_sub_field('content');
?>

<?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $content ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <div class="block-story__content row">
                <?php if ( ! empty( $subhead ) || ! empty( $headline ) ) : ?>
                    <div class="col-12 col-lg-5">
                        <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                        <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $content ) ) : ?>
                    <div class="col-12 col-lg-9">
                        <?php echo ! empty( $content ) ? $content : ''; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
