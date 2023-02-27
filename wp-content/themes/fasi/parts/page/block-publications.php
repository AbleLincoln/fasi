<?php

/**
 * Block for Publications Section
 * 
 * @package WordPress
 * @subpackage fasi
 * @since fasi 2.0
 */

$anchor_id = get_sub_field('anchor_id');
$anchor = !empty($anchor_id) ? 'id="' . sanitize_title($anchor_id) . '" ' : '';

$years = get_sub_field('publications_accordion');
?>

<section <?php echo $anchor; ?> class="block-accordion block-publications theme-light">
    <div class="container">
        <div class="row">
            <div class="block-accordion__content col-12">
                <h2 class="h3">Publications</h2>
            </div>

            <div class="block-accordion__accordion-container col-12">
                <div class="block-accordion__accordion">
                    <?php foreach ($years as $year) { ?>
                        <div class="block-accordion__accordion-item">
                            <div class="block-accordion__accordion-item-title">
                                <button><?php echo $year['year_name'] ?></button>
                            </div>
                            <div class="block-accordion__accordion-item-content">
                                <?php foreach ($year['articles'] as $article) { ?>
                                    <div class="block-publications__article">
                                        <p>
                                            <a href="<?php echo $article['link'] ?>">
                                                <em><?php echo $article['title'] ?></em>
                                            </a>
                                        </p>
                                        <small>
                                            <?php echo $article['authors'] ?>
                                        </small>
                                        <br />
                                        <small>
                                            <?php echo $article['citation'] ?>
                                        </small>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>