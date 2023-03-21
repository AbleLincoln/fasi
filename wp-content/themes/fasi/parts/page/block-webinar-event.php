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

$block_title = get_sub_field('block_title');
$date = get_sub_field('date');
$event_title = get_sub_field('event_title');
$speaker = get_sub_field('speaker');

?><section class="<?php echo $main_block_class; ?>" style="<?php echo $attr_style; ?>">
    <div class="container">
        <div class="row">
            <div class="<?php echo $block_size; ?>">
                <h4 style="color: #53d396; margin-bottom: 2rem;"><?php echo $block_title ?></h4>


                <p>
                    <span style="color: #4db7b1;"><small>Date</small></span> <br />
                    <span style="color: #ffffff; font-weight: 100;"><?php echo $date ?></span>
                </p>

                <p>
                    <span style="color: #4db7b1;"><small>Title</small></span> <br />
                    <span style="color: #ffffff; font-weight: 100;"><?php echo $event_title ?></span>
                </p>

                <p>
                    <span style="color: #4673ff;"><small>Speaker</small></span> <br />
                    <span style="color: #ffffff; font-weight: 100;"><?php echo $speaker ?></span>
                </p>
            </div>
        </div>
    </div>
</section><?php
