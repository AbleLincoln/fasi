<?php
/**
 * Main Hero section for page
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  1.0
 */

$post_id = isset( $post_id ) && ! empty ( $post_id ) ? $post_id : get_the_ID();
$thumbnail = get_field('background_image', $post_id) ? get_field('background_image', $post_id) : get_post_thumbnail_id();
$path = pathinfo( get_attached_file( $thumbnail ) );

$video_mp4 = get_field('background_video_mp4', $post_id);
$video_webm = get_field('background_video_webm', $post_id);
$content_width = get_field('content_width', $post_id) ? get_field('content_width', $post_id) : '9';

$block_class[] = 'page-hero';

if(!empty($thumbnail)){
    $block_class[] = 'page-hero--thumbnail';
    $thumbnail_class = 'page-hero__thumbnail';
}
?>

<section class="<?php echo implode(' ', $block_class); ?>">
    <?php if(!empty($thumbnail) && empty($video_mp4) && empty($video_webm)) : ?>
        <div class="<?php echo $thumbnail_class; ?>">
            <?php echo wp_get_attachment_image( $thumbnail, 'hero' ); ?>
            <?php $image_caption = wp_get_attachment_caption($thumbnail); ?>
            <?php if ( ! empty( $image_caption ) ) { ?>
                <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
            <?php } ?>
        </div>
    <?php else: ?>
        <div class="Vidage">
            <div class="Vidage__image" style="background-image: url(<?php echo wp_get_attachment_image_src( $thumbnail, 'hero' )[0]; ?>);"></div>

            <video id="VidageVideo" class="Vidage__video" preload="metadata" loop autoplay muted>
                <?php if ( ! empty( $video_mp4 ) ) : ?>
                    <source src="<?php echo $video_mp4; ?>" type="video/mp4">
                <?php endif; ?>
                <?php if ( ! empty( $video_webm ) ) : ?>
                    <source src="<?php echo $video_webm; ?>" type="video/webm">
                <?php endif; ?>
            </video>

            <canvas class="Vidage__canvas"></canvas>

            <div class="Vidage__backdrop"></div>
        </div>
    <?php endif; ?>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-<?php echo $content_width; ?>">
                <div class="page-hero__content">
                    <h1 class="h2"><?php echo get_field('hero_headline', $post_id) ? get_field('hero_headline', $post_id) : get_the_title($post_id); ?></h1>
                    <?php the_field('hero_content', $post_id); ?>
                </div>
            </div>
        </div>
    </div>
</section>
