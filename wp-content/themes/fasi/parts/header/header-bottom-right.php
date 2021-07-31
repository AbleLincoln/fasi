<?php
    $cta_bool = get_field('h_display_cta', 'options');
    $cta = get_field('h_cta', 'options');

    $classes = isset( $classes ) ? $classes : 'col-4 col-lg-2';

    if ($cta_bool && !empty($cta)):
?>
<div class="main-header__right <?php echo $classes; ?>">
    <?php get_theme_part('header/header-cta', ['cta' => $cta]); ?>
</div>
<?php
    endif;
