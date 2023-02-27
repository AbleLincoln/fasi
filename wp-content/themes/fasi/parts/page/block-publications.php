<?php

/**
 * Block for Publications Section
 * 
 * @package WordPress
 * @subpackage fasi
 * @since fasi 2.0
 */

// $years = range(2023, 2017, -1);
// $articles = get_sub_field('articles_2023')
$years = get_sub_field('publications_accordion');
?>

<section class="block-accordion block-publications theme-light">
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
                            <?php foreach ($year['articles'] as $article) { ?>
                                <div class="block-accordion__accordion-item-content">
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
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>