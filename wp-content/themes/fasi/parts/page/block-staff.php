<?php
/**
 * Block for Staff Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-staff';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$subhead = get_sub_field('section_subhead');
$headline = get_sub_field('section_headline');
$staff_sections = get_sub_field('staff_sections');
?>

<?php if ( ! empty( $subhead ) || ! empty( $headline ) || ! empty( $staff_sections ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <div class="row">
                <?php if ( ! empty( $subhead ) || ! empty( $headline ) ) : ?>
                    <div class="block-staff__headings col-12 col-lg-5">
                        <?php echo ! empty( $subhead ) ? '<p class="overline">' . $subhead . '</p>' : ''; ?>
                        <?php echo ! empty( $headline ) ? '<h2 class="h3">' . $headline . '</h2>' : ''; ?>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $staff_sections ) ) : ?>
                    <div class="col-12">
                        <div class="row">
                            <?php foreach ( $staff_sections as $section ) { ?>
                                <?php if ( isset( $section['section_title'] ) && ! empty( $section['section_title'] ) ) { ?>
                                    <div class="block-staff__section-title col-12">
                                        <h3 class="h4"><?php echo $section['section_title']; ?></h3>
                                    </div>
                                <?php } ?>
                                <?php 
                                foreach ( $section['staff_members'] as $member ) { 
                                    if ( ( $member['has_staff_profile'] && isset( $member['staff_member'] ) ) || ( isset( $member['member_name'] ) ) ) {
                                        $has_profile = $member['has_staff_profile'] && isset( $member['staff_member'] ) && isset( $member['staff_member']->ID ) ? true : false;
                                        $image = true === $has_profile ? wp_get_attachment_image( get_post_thumbnail_id( $member['staff_member']->ID ), 'staff' ) : wp_get_attachment_image( $member['member_profile'], 'staff' );
                                        $name = true === $has_profile ? $member['staff_member']->post_title : $member['member_name'];
                                        $letters = true === $has_profile ? get_field( 'letters', $member['staff_member']->ID ) : '';
                                        $full_name = ! empty( $letters ) ? $name . ', ' . $letters : $name;
                                        $role = true === $has_profile ? get_field( 'role', $member['staff_member']->ID ) : $member['member_role'];
                                        ?>
                                        <div class="block-staff__item col-6 col-lg-3">
                                            <?php if ( true === $has_profile ) { ?><a href="<?php the_permalink( $member['staff_member']->ID ); ?>"><?php } ?>
                                                <?php echo $image; ?>
                                                <h4 class="p"><strong><?php echo $full_name; ?></strong></h4>
                                                <p><?php echo $role; ?></p>
                                            <?php if ( true === $has_profile ) { ?></a><?php } ?>
                                        </div>
                                    <?php 
                                    }
                                } 
                                ?>
                            <?php } ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
