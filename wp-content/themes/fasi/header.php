<?php
/**
 * The Header for theme.
 *
 * Displays all of the <head> section and page header
 *
 * @package    WordPress
 * @subpackage fasi
 * @since      fasi 1.0
 */

get_theme_part( 'html-head' );
?>

<body <?php body_class(); ?>>
<?php the_field( 'body_script', 'option' ); ?>
<div id="page">
	<header class="main-header">
        <?php get_theme_part('header/alert-bar'); ?>
        <div class="container-fluid">
            <div class="main-header__bottom">
                <div class="main-header__wrapper">
                    <div class="row">
                        <?php
                        get_theme_part( 'header/header-bottom-left' );

                        $classes = 'col-6 col-lg-2 offset-lg-8';
                        $menu_locations = get_nav_menu_locations();
                        
                        if ( isset( $menu_locations['primary'] ) ) :
                            $menu_obj = get_term( $menu_locations['primary'], 'nav_menu' );
                            $menu_items = wp_get_nav_menu_items( $menu_obj );
                        
                            if ( ! empty( $menu_items ) ) :
                                get_theme_part( 'header/header-nav' );
                                $classes = 'col-4 col-lg-2';
                            endif;
                        endif;

                        get_theme_part( 'header/header-bottom-right', ['classes' => $classes] );
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </header>
