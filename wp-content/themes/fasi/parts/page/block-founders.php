<?php
/**
 * Block for Founders Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-founders';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$founders_sections = get_sub_field('founders_sections');
?>

<?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $founders_sections ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <div class="row">
                <?php if ( ! empty( $subhead ) || ! empty( $headline ) ) : ?>
                    <div class="block-founders__headings col-12 col-lg-5">
                        <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                        <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $founders_sections ) ) : ?>
                    <div class="col-12">
                        <div class="row">
                            <?php foreach ( $founders_sections as $section ) { ?>
                                <?php if ( isset( $section['section_title'] ) && ! empty( $section['section_title'] ) ) { ?>
                                    <div class="block-founders__section-title col-12">
                                        <h3 class="h4"><?php echo $section['section_title']; ?></h3>
                                    </div>
                                <?php } ?>
                                <?php foreach ( $section['founders_members'] as $member ) { ?>
                                    <div class="block-founders__item col-6 col-lg-4">
                                        <?php if ( ! empty( $member['link'] ) ) { ?><a href="<?php echo $member['link']; ?>"><?php } ?>
                                        <div class="block-founders__image">
                                            <?php echo wp_get_attachment_image( $member['image'], 'signature' ); ?>
                                        </div>
                                        <p><strong><?php echo $member['name']; ?></strong></p>
                                        <?php if ( ! empty( $member['link'] ) ) { ?></a><?php } ?>
                                    </div>
                                <?php } ?>
                            <?php } ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
