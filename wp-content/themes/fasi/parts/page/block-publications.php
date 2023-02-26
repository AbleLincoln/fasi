<?php

/**
 * Block for Publications Section
 * 
 * @package WordPress
 * @subpackage fasi
 * @since fasi 2.0
 */

$fields = get_fields();
function filter_for_years($key)
{
    return strpos($key, 'articles') === 0;
}

$years = array_filter($fields, 'filter_for_years', ARRAY_FILTER_USE_KEY);
$articles = get_sub_field('articles_2023')
?>

<section class="block-accordion block-publications theme-light">
    <?php var_export($fields) ?>
    <?php var_export($years) ?>
    <div class="container">
        <div class="row">
            <div class="block-accordion__content col-12">
                <h2 class="h3">Publications</h2>
            </div>

            <!-- fetch all metadata from pubmed -->
            <!-- sort into years -->
            <!-- make accordion for each year -->
            <?php foreach ($years as $year) { ?>
                <div class="block-accordion__accordion-container col-12">
                    <div class="block-accordion__accordion">
                        <div class="block-accordion__accordion-item">
                            <div class="block-accordion__accordion-item-title">
                                <button>2023</button>
                            </div>
                            <?php foreach ($articles as $article) { ?>
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
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>