<?php
$alt_logo = get_field('alt_logo', 'options');
$newsletter_form = get_field('newsletter_form', 'options');
?>
<div class="main-footer__top">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="main-footer__logo">
                    <a href="<?php echo home_url('/'); ?>" class="main-footer__logo"><?php echo ! empty( $alt_logo ) ? f_img($alt_logo, 'main-logo') : '<p class="h1">FASI</p>'; ?></a>
                </div>
                <?php echo get_field( 'additional_content', 'option' ) ? '<p>' . get_field( 'additional_content', 'option' ) . '</p>' : ''; ?>
            </div>
            <div class="main-footer__nav col-12 col-lg-5">
                <nav class="main-footer__nav">
                    <?php wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false ) ); ?>
                </nav>
            </div>
            <div class="main-footer__newsletter col-12 col-lg-4">
                <p class="h6"><?php the_field( 'newsletter_heading', 'option' ); ?></p>
                <?php echo do_shortcode( $newsletter_form ); ?>
            </div>
        </div>
    </div>
</div>
