<?php
/**
 * Block for Challenge Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-testimonial';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';

$testimonial = get_sub_field('testimonial');
$author = get_sub_field('author');
$role = get_sub_field('role');
?>

<?php if ( ! empty( $testimonial ) ) : ?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <div class="container">
            <blockquote class="row">
                <?php if ( ! empty( $testimonial ) ) : ?>
                    <div class="block-testimonial__testimonial col-12">
                        <p class="h3"><?php echo $testimonial; ?></p>
                        <span class="block-testimonial__quotes"></span>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $author ) || ! empty( $role ) ) : ?>
                    <div class="block-testimonial__author col-12">
                        <cite class="p"><?php echo ! empty( $author ) ? '- ' . $author . '<br />' : ''; echo $role; ?></cite>
                    </div>
                <?php endif; ?>
            </blockquote>
        </div>
    </section>
<?php endif; ?>
