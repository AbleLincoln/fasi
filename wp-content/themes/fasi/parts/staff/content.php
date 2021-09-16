<?php

/**
 * Staff Content section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  1.0
 */

$education = get_field('education');
$affiliations = get_field('affiliations');
$quote = get_field('quote');
$content = get_the_content(get_the_ID());
$back_button_text = get_field('back_button_text');
$hide_back_button = get_field('hide_back_button');
$next_button_text = get_field('next_button_text');
?>

<section class="staff-single">
    <div class="container">
        <div class="row">
            <div class="staff-single__sidebar col-12 col-lg-3">
                <?php if (!empty($education)) : ?>
                    <div class="staff-single__sidebar-item">
                        <h2 class="p">Education</h2>
                        <ul class="staff-single__sidebar--education">
                            <?php
                            foreach ($education as $item) {
                                echo '<li>' . $item['degree'] . '<br />' . $item['university'] . '</li>';
                            }
                            ?>
                        </ul>
                    </div>
                <?php endif; ?>
                <?php if (!empty($affiliations)) : ?>
                    <div class="staff-single__sidebar-item">
                        <h2 class="p">Affiliations</h2>
                        <ul class="staff-single__sidebar--affiliations">
                            <?php
                            foreach ($affiliations as $item) {
                                echo '<li>' . $item['affiliation'] . '</li>';
                            }
                            ?>
                        </ul>
                    </div>
                <?php endif; ?>
            </div>
            <div class="staff-single__content col-12 col-lg-8 offset-lg-1">
                <?php if (!empty($quote)) : ?>
                    <blockquote>
                        <p class="h4"><?php echo $quote; ?></p>
                    </blockquote>
                <?php endif; ?>
                <?php the_content(); ?>
            </div>
            <div class="staff-single__navigation">
                <div class="staff-single__navigation-left col-12 col-lg-6">
                    <?php
                    $staff_page_ID = 651;
                    $page_blocks = get_fields($staff_page_ID)['page_blocks'];

                    /**
                     * filters staff blocks to look for the one where the staff id matches the one for this current staff page
                     */
                    function filter_staff_blocks($block)
                    {
                        if ($block['acf_fc_layout'] == 'block_staff') {

                            $staff_members = array_column($block['staff_sections'][0]['staff_members'], 'staff_member');

                            $the_staff_member = array_filter($staff_members, function ($staff) {
                                return $staff->ID === get_the_ID();
                            });
                            if (!empty($the_staff_member)) return true;
                        }
                        return false;
                    }

                    $filtered_blocks = array_values(array_filter($page_blocks, 'filter_staff_blocks'));
                    // default values
                    $section_title = 'Principal Investigators';
                    $section_anchor = 'investigators';
                    if (!empty($filtered_blocks)) {
                        $section_title = $filtered_blocks[0]['staff_sections'][0]['section_title'];
                        $section_anchor = $filtered_blocks[0]['anchor_id'];
                    }

                    $block_button = array(
                        'url'    => get_permalink($staff_page_ID) . '#' . $section_anchor,
                        'title'  => 'Back: ' . $section_title,
                        'target' => '_self',
                        'class'  => 'c-btn c-btn-secondary'
                    );
                    echo '<div class="c-btn-wrapper"><a href="' . $block_button['url'] . '" class="' . $block_button['class'] . '" target="' . $block_button['target'] . '"><span>' . $block_button['title'] . '</span></a></div>';
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>