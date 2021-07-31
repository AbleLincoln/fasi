<?php
/**
 * Block for Investigators Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-investigators';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$image = get_sub_field('image');
$headline = get_sub_field('section_headline');
$investigators = get_sub_field('investigators');
?>

<?php if ( ! empty( $image ) || ! empty( $headline ) || ! empty( $investigators ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <div class="row">
                <?php if ( ! empty( $headline ) || ! empty( $investigators ) ) : ?>
                    <div class="block-investigators__content col-12 col-lg-6">
                        <?php if ( isset( $headline ) && ! empty( $headline ) ) { ?>
                            <h2 class="h4"><?php echo $headline; ?></h3>
                        <?php } ?>
                        <?php if ( isset( $investigators ) && ! empty( $investigators ) ) { ?>
                            <div class="row">
                                <?php 
                                foreach ( $investigators as $investigator ) {
                                    $link = $investigator['has_staff_profile'] ? get_permalink( $investigator['investigator']->ID ) : '';
                                    $letters = isset( $investigator['investigator']->ID ) ? ', ' . get_field( 'letters', $investigator['investigator']->ID ) : '';
                                    $name = $investigator['has_staff_profile'] ? $investigator['investigator']->post_title . $letters : $investigator['investigator_name'];
                                    $role = $investigator['has_staff_profile'] ? get_field( 'role', $investigator['investigator']->ID ) : $investigator['investigator_role'];
                                    ?>
                                    <div class="block-investigators__item col-12 col-lg-6">
                                        <?php if ( ! empty( $link ) ) { ?><a href="<?php echo $link; ?>"><?php } ?>
                                            <h4 class="p"><strong><?php echo $name; ?></strong></h4>
                                            <p><?php echo $role; ?></p>
                                        <?php if ( ! empty( $link ) ) { ?></a><?php } ?>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $image ) ) : ?>
                    <div class="block-investigators__image col-12 col-lg-6">
                        <?php echo wp_get_attachment_image( $image, 'investigators' ); ?>
                        <?php $image_caption = wp_get_attachment_caption($image); ?>
                        <?php if ( ! empty( $image_caption ) ) { ?>
                            <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                        <?php } ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
