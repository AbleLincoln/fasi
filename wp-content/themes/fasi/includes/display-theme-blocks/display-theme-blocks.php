<?php

/**
 * Display theme blocks from flexible content (acf)
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi 1.0
 */

class ContentBlock
{

    private static $theme_blocks_locations = array(
        'block_content'                 => 'page/content',
        'block_tabs'                    => 'page/block-tabs',
        'block_slider_gallery'          => 'page/block-content-gallery',
        'block_content_links'           => 'page/block-content-links',
        'block_text_links'              => 'page/block-content-links',
        'block_gallery_lightbox'        => 'page/block-gallery-lightbox',
        'block_img_composition'         => 'page/block-image-composition/main',
        'block_content_images_fluid'    => 'page/block-content-images-fluid',
        'block_call_to_action'          => 'page/block-cta',
        'block_challenge'               => 'page/block-challenge',
        'block_story'                   => 'page/block-story',
        'block_staff'                   => 'page/block-staff',
        'block_investigators'           => 'page/block-investigators',
        'block_founders'                => 'page/block-founders',
        'block_testimonial'             => 'page/block-testimonial',
        'block_mission'                 => 'page/block-mission',
        'block_model'                   => 'page/block-model',
        'block_solution'                => 'page/block-solution',
        'block_news_bar'                => 'page/block-news-bar',
        'block_donate'                  => 'page/block-donate',
        'block_content_with_background' => 'page/block-content-with-background',
        'block_allergy_numbers'         => 'page/block-allergy-numbers',
        'block_image_accordion'         => 'page/block-image-accordion',
        'block_accordion'               => 'page/block-accordion',
        'universal_block'               => 'page/universal-block',
        'pretty_window_block'           => 'page/pretty-window-block',
        'block_publications'            => 'page/block-publications',
        'block_webinar_event'            => 'page/block-webinar-event'
    );

    private function __construct()
    {
    }

    public static function display_theme_blocks($field_name = 'page_blocks', $sec_param = null)
    {
        if ($sec_param == null)
            $sec_param = get_the_ID();
        while (have_rows($field_name, $sec_param)) {
            the_row();
            $block_layout = get_row_layout();

            if (isset(self::$theme_blocks_locations[$block_layout])) {
                get_theme_part(self::$theme_blocks_locations[$block_layout]);
            }
        }
    }

    public static function get_block_size_class()
    {
        $block_width     = get_sub_field('width') ? get_sub_field('width') : '8';
        $block_offset    = get_sub_field('offset') !== '' && get_sub_field('offset') !== false ? get_sub_field('offset') : '2';
        $block_width_sm     = get_sub_field('width_tablet') ? get_sub_field('width_tablet') : '12';
        $block_offset_sm    = get_sub_field('offset_tablet') ? get_sub_field('offset_tablet') : '';
        $block_width_xs     = get_sub_field('width_mobile') ? get_sub_field('width_mobile') : '12';
        $block_offset_xs    = get_sub_field('offset_mobile') ? get_sub_field('offset_mobile') : '';
        $block_size_classes = array();
        $block_size_classes[] = "col-" . $block_width_xs;
        $block_size_classes[] = "col-md-" . $block_width_sm;
        $block_size_classes[] = "col-lg-" . $block_width;

        if (!empty($block_offset_xs) || $block_offset_xs === '0') {
            $block_size_classes[] = "offset-" . $block_offset_xs;
        }

        if (!empty($block_offset_sm) || $block_offset_sm === '0') {
            $block_size_classes[] = "offset-md-" . $block_offset_sm;
        }

        if (!empty($block_offset) || $block_offset === '0') {
            $block_size_classes[] = "offset-lg-" . $block_offset;
        }

        return implode(' ', $block_size_classes);
    }

    public static function get_block_spacing_class()
    {
        $result = array();
        if (get_sub_field('top_spacing')) {
            $result[] = 'block-top-spacing';
        }
        if (get_sub_field('bottom_spacing')) {
            $result[] = 'block-bottom-spacing';
        }

        if (get_sub_field('top_margin')) {
            $result[] = 'block-margin-top';
        }
        if (get_sub_field('bottom_margin')) {
            $result[] = 'block-margin-bottom';
        }

        return implode(' ', $result);
    }

    public static function the_block_title()
    {
        $block_title = get_sub_field('section_title');
        if (!empty($block_title)) :
?><?php echo $block_title; ?><?php
                            endif;
                        }
                    }
