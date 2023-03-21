<?php

/**
 * Block for Webinar Event section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  2.0
 */

$block_size = ContentBlock::get_block_size_class();

$main_block_class = 'block-content';
$spacing_class = ContentBlock::get_block_spacing_class();
if (!empty($spacing_class))
    $main_block_class .= ' ' . $spacing_class;

$bg_color = get_sub_field('background_color');
$attr_style = '';
if (!empty($bg_color)) {
    $attr_style .= 'background-color:' . $bg_color . ';';
}

?><section class="<?php echo $main_block_class; ?>" style="<?php echo $attr_style; ?>">
    <div class="container">
        <div class="row">
            <div class="<?php echo $block_size; ?>">
                content goes here
            </div>
        </div>
    </div>
</section><?php
