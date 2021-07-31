<?php
/**
 * Block for Image Accordion Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-image-accordion';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$content = get_sub_field('content');
$accordion_base_image = get_sub_field('accordion_base_image');
$accordion_mobile_image = get_sub_field('accordion_mobile_image');
$accordion = get_sub_field('accordion');
?>

<?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $content ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <div class="row">
                <?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $content ) ) : ?>
                    <div class="block-image-accordion__content col-12 col-lg-11">
                        <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                        <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                        <?php echo ! empty( $content ) ? $content : ''; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="block-image-accordion__accordion-container">
            <div class="container">
                <div class="row">
                    <?php if ( ! empty( $accordion_base_image ) && ! empty( $accordion ) ) : ?>
                        <div class="block-image-accordion__accordion col-12 col-lg-6">
                            <?php 
                            $count = 0;
                            foreach ( $accordion as $item ) { 
                                $count++;
                                ?>
                                <div class="block-image-accordion__accordion-item">
                                    <div class="block-image-accordion__accordion-item-title">
                                        <button data-image="<?php echo $count; ?>"><?php echo $count . '. ' . $item['title']; ?></button>
                                    </div>
                                    <div class="block-image-accordion__accordion-item-inline-image">
                                        <?php echo wp_get_attachment_image( $item['inline_image'], 'inline-image-accordion' ); ?>
                                        <?php $image_caption = wp_get_attachment_caption($item['inline_image']); ?>
                                        <?php if ( ! empty( $image_caption ) ) { ?>
                                            <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                                        <?php } ?>
                                    </div>
                                    <div class="block-image-accordion__accordion-item-content">
                                        <?php echo $item['content']; ?>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <div class="block-image-accordion__image col-12 col-lg-6">
                            <?php echo wp_get_attachment_image( $accordion_base_image, 'image-accordion', false, array('class' => 'block-image-accordion__image--original') ); ?>
                            <?php $image_caption = wp_get_attachment_caption($accordion_base_image); ?>
                            <?php if ( ! empty( $image_caption ) ) { ?>
                                <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                            <?php } ?>
                            <?php 
                            $count = 0;
                            foreach ( $accordion as $item ) { 
                                $count++;
                                ?>
                                <div id="image-overlay-<?php echo $count; ?>" class="block-image-accordion__image-overlay">
                                    <?php echo wp_get_attachment_image( $item['child_image_layer'], 'image-accordion' ); ?>
                                    <?php $image_caption = wp_get_attachment_caption($item['child_image_layer']); ?>
                                    <?php if ( ! empty( $image_caption ) ) { ?>
                                        <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                        <div class="block-image-accordion__image-mobile col-12 col-lg-6">
                            <?php echo wp_get_attachment_image( $accordion_mobile_image, 'image-accordion' ); ?>
                            <?php $image_caption = wp_get_attachment_caption($accordion_mobile_image); ?>
                            <?php if ( ! empty( $image_caption ) ) { ?>
                                <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                            <?php } ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
