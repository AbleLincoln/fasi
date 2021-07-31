<?php

/**
 * Staff Hero section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  1.0
 */

$staff_page = get_field('staff_archive_page', 'option');
$name = get_the_title();
$image = get_post_thumbnail_id();
$letters = get_field('letters');
$full_name = !empty($letters) ? $name . ', ' . $letters : $name;
$role = get_field('role');
$linkedin = get_field('linkedin');
$twitter = get_field('twitter');
$email = get_field('email');
?>

<section class="hero-staff">
    <div class="container">
        <div class="row">
            <?php if (!empty($staff_page)) : ?>
                <div class="hero-staff__image col-12">
                    <a class="hero-staff__back" href="<?php the_permalink($staff_page); ?>">Our Team</a>
                </div>
            <?php endif; ?>
            <?php if (!empty($image)) : ?>
                <div class="hero-staff__image col-12 col-md-3">
                    <?php echo wp_get_attachment_image($image, 'staff'); ?>
                </div>
            <?php endif; ?>
            <div class="hero-staff__content col-12 col-md-9 col-lg-8<?php if (!empty($image)) { ?> offset-lg-1<?php } ?>">
                <h1 class="h3"><?php echo $full_name; ?></h1>
                <p class="h4"><?php echo $role; ?></p>
                <?php if (!empty($linkedin) || !empty($twitter) || !empty($email)) : ?>
                    <ul class="hero-staff__social">
                        <?php if (!empty($linkedin)) : ?>
                            <li class="hero-staff__social-icon"><a href="<?php echo $linkedin; ?>" target="_blank"><span class="indent"><?php echo $name; ?> on LinkedIn</span><i class="icon-social-linkedin"></i></a></li>
                        <?php endif; ?>
                        <?php if (!empty($twitter)) : ?>
                            <li class="hero-staff__social-icon"><a href="<?php echo $twitter; ?>" target="_blank"><span class="indent"><?php echo $name; ?> on Twitter</span><i class="icon-social-twitter"></i></a></li>
                        <?php endif; ?>
                        <?php if (!empty($email)) : ?>
                            <li class="hero-staff__social-icon"><a href="<?php echo $email; ?>" target="_blank"><span class="indent">Email <?php echo $name; ?></span><i class="icon-email"></i></a></li>
                        <?php endif; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>