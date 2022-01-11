<?php

/**
 * Display block content aside image with a border
 * 
 * @package WordPress
 * @subpackage fasi
 * @since fasi 2.0
 * @author Andrew Maney
 */

$main_block_class = 'block-pretty-window';

$image_url = get_sub_field('image');

?>

<section class="<?php echo $main_block_class; ?>">
    <div class="container">
        <div class="row">
            <div class="col-lg-6" style="background-image: url(<?php the_sub_field('image'); ?>)">
                <h2><?php the_sub_field('title'); ?></h2>
            </div>

            <div class="col-lg-6">
                <?php the_sub_field('content'); ?>
            </div>
        </div>
    </div>
</section><?php
