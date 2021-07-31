<?php
/**
 * Block for News Section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

$main_block_class = 'block-news-bar';
$spacing_class = ContentBlock::get_block_spacing_class();

if ( ! empty( $spacing_class ) ) {
    $main_block_class .= ' ' . $spacing_class;
}

$anchor_id = get_sub_field('anchor_id');
$anchor = ! empty( $anchor_id ) ? 'id="' . sanitize_title( $anchor_id ) . '" ' : '';
$background_image = get_sub_field( 'background_image' );

$posts_to_display = get_sub_field( 'posts_to_display' );
$featured_posts = get_sub_field( 'featured_posts' );

$block_args = array(
    'post_type'   => 'post',
    'post_status' => 'publish'
);

$block_featured_args = array(
    'post_type'   => 'post',
    'post_status' => 'publish'
);

if ( ! empty( $featured_posts ) ) {
    $block_featured_args['post__in'] = $featured_posts;
    $block_featured_args['orderby'] = 'post__in';
    $block_args['post__not_in'] = $featured_posts;
    $posts_to_display = $posts_to_display - count( $featured_posts );
}

$posts_to_display = $posts_to_display > 0 ? $posts_to_display : 0;

$block_args['posts_per_page'] = ! empty( $posts_to_display ) ? intval( $posts_to_display ) : 3;

$block_featured_query = new WP_Query( $block_featured_args );
$block_query = new WP_Query( $block_args );

$block_featured_count = ! empty( $featured_posts ) ? count( $block_featured_query->posts ) : 0;
$block_count = 0 !== $posts_to_display ? count( $block_query->posts ) : 0;
$post_count = $block_featured_count + $block_count;
$total_posts = 1 === strlen( strval( $post_count ) ) ? '0' . strval( $post_count ) : strval( $post_count );

if ( $block_query->have_posts() || $block_featured_query->have_posts() ) {
?>
    <section <?php echo $anchor; ?>class="<?php echo $main_block_class; ?>">
        <?php if ( ! empty( $background_image ) ) : ?>
            <div class="block-news-bar__image">
                <?php echo wp_get_attachment_image( $background_image, 'news-bar' ); ?>
                <?php $image_caption = wp_get_attachment_caption($background_image); ?>
                <?php if ( ! empty( $image_caption ) ) { ?>
                    <p class="image-caption"><?php echo esc_html( $image_caption ); ?></p>
                <?php } ?>
            </div>
        <?php endif; ?>
        <div class="js-news-bar-slider">
            <?php while ( $block_featured_query->have_posts() && ! empty( $featured_posts ) ) { $block_featured_query->the_post(); ?>
                <div class="block-news-bar__slide">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12 mx-auto block-news-bar__content">
                                <?php 
                                $cats = get_the_category();
                                if ( ! empty( $cats ) ) { 
                                    ?>
                                    <span class="overline">
                                        <?php foreach ( $cats as $cat ) { ?>
                                            <span><?php echo esc_html( $cat->name ); ?></span>
                                        <?php } ?>
                                    </span>
                                <?php } ?>
                                <h3><?php the_time( 'n.j.y' ); ?> - <?php the_title(); ?></h3>
                                <?php 
                                $external_link = get_field( 'external_link', get_the_ID() );
                                $external_link = empty( $external_link ) ? get_field( 'video_thumbnail', get_the_ID(), false ) : $external_link;
                                $block_button = array(
                                    'url'    => ! empty( $external_link ) ? esc_url( $external_link ) : get_permalink(),
                                    'title'  => 'Read article',
                                    'target' => ! empty( $external_link ) ? '_blank' : '_self',
                                    'class'  => 'c-btn c-btn-secondary'
                                );
                                echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
            <?php while ( $block_query->have_posts() && 0 !== $posts_to_display ) { $block_query->the_post(); ?>
                <div class="block-news-bar__slide">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12 mx-auto block-news-bar__content">
                                <?php 
                                $cats = get_the_category();
                                if ( ! empty( $cats ) ) { 
                                    ?>
                                    <span class="overline">
                                        <?php foreach ( $cats as $cat ) { ?>
                                            <span><?php echo esc_html( $cat->name ); ?></span>
                                        <?php } ?>
                                    </span>
                                <?php } ?>
                                <h3><?php the_time( 'n.j.y' ); ?> - <?php the_title(); ?></h3>
                                <?php 
                                $external_link = get_field( 'external_link', get_the_ID() );
                                $external_link = empty( $external_link ) ? get_field( 'video_thumbnail', get_the_ID(), false ) : $external_link;
                                $block_button = array(
                                    'url'    => ! empty( $external_link ) ? esc_url( $external_link ) : get_permalink(),
                                    'title'  => 'Read article',
                                    'target' => ! empty( $external_link ) ? '_blank' : '_self',
                                    'class'  => 'c-btn c-btn-secondary'
                                );
                                echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>

        <?php if ( 2 <= $post_count ) : ?>
            <div class="container block-news-bar__info-container">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-12 mx-auto block-news-bar__info">
                        <span class="block-news-bar__info-current  js-news-bar-slide-count">01</span>
                        <span class="block-news-bar__info-total"><?php echo $total_posts; ?></span>
                        <div class="block-news-bar__arrows  js-news-bar-arrows"></div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </section>
    <?php
}

wp_reset_postdata();
