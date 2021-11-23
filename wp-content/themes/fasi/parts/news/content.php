<?php

/**
 * News & Press Content section
 *
 * @package WordPress
 * @subpackage fasi
 * @since fasi  1.0
 */

if (have_posts()) :
?>
	<section class="news-archive">
		<div class="container">
			<div class="row">
				<div class="news-archive__filters col-12 hidden">
					<form method="get">
						<?php $categories = get_categories(); ?>
						<div class="news-archive__select">
							<select id="posts-select" name="cat">
								<option value="0">All Types</option>
								<?php foreach ($categories as $key => $cat) {
									$selected = $cat->term_id === intval($_GET['cat']) ? ' selected' : '';
									echo '<option value="' . $cat->term_id . '"' . $selected . '>' . $cat->name . '</option>';
								} ?>
							</select>
						</div>
						<div class="news-archive__search">
							<input id="posts-search" type="text" name="s" placeholder="Search" value="<?php echo esc_html($_GET['s']); ?>" />
							<i class="icon-search"></i>
						</div>
						<div class="news-archive__submit">
							<button type="submit" class="c-btn c-btn-primary gform_button button"><span>Submit</span></button>
						</div>
					</form>
				</div>

				<div class="col-12">
					<div id="posts" class="row">

						<?php

						while (have_posts()) :
							the_post();

							$link = get_field('external_link') ? get_field('external_link') : get_permalink();

							$video_iframe = get_field('video_thumbnail') ? get_field('video_thumbnail') : false;
							$video_url = get_field('video_thumbnail') ? get_field('video_thumbnail', false, false) : false;
							$thumbnail_url = get_the_post_thumbnail_url()
						?>
							<article class="news-archive__post col-12 col-lg-6">
								<?php if (get_post_thumbnail_id() || $video_iframe) : ?>
									<div class="news-archive__image<?php if ($video_iframe) {
																		echo ' news-archive__image--video';
																	} ?>">
										<?php if ($video_iframe) {
											echo oembed_video_wrapper($video_iframe, $video_url, $thumbnail_url);
										} else { ?>
											<a href="<?php echo $link; ?>" <?php echo $target; ?>>
												<?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'news'); ?>
												<?php $image_caption = wp_get_attachment_caption(get_post_thumbnail_id()); ?>
												<?php if (!empty($image_caption)) { ?>
													<p class="image-caption"><?php echo esc_html($image_caption); ?></p>
												<?php } ?>
												<span class="news-archive__arrow"></span>
											</a>
										<?php } ?>
									</div>
								<?php endif; ?>
								<div class="news-archive__meta">
									<?php
									$cats = get_the_category();
									foreach ($cats as $key => $cat) {
										if (0 < $key) {
											echo ', ';
										}
										echo $cat->name;
									}
									?> - <?php the_time('m.d.y'); ?>
								</div>
								<h2 class="news-archive__title">
									<a href="<?php echo $video_url ? $video_url : $link; ?>" target="_blank"><?php the_title(); ?></a>
								</h2>
							</article>
						<?php endwhile; ?>

					</div>
				</div>

				<?php
				global $wp_query;
				$paged = get_query_var('paged') ? get_query_var('paged') : 1;
				$range = 2;
				$pages = $wp_query->max_num_pages;
				$showitems = ($range * 2) + 1;
				if (1 !== $pages) {
				?>
					<div class="news-archive__pagination col-12">
						<?php
						echo '<ul>';
						echo $paged > 1 ? '<li class="news-archive__pagination-prev"><a href="' . get_pagenum_link($paged - 1) . '"><span>Previous Page</span></a></li>' : '';
						if ($paged > 2 && $paged > $range + 1 && $showitems < $pages) echo '<li class="news-archive__pagination-page"><a href="' . get_pagenum_link(1) . '">1</a></li>';
						echo ($paged - $range - 1) > 1 ? '<li class="news-archive__pagination-page">...</li>' : '';
						for ($i = 1; $i <= $pages; $i++) {
							if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) {
								$displayed_page = $i;
								echo ($paged == $i) ? '<li class="news-archive__pagination-page active">' . $i . '</li>' : '<li class="news-archive__pagination-page"><a href="' . get_pagenum_link($i) . '">' . $i . '</a></li>';
							}
						}
						echo isset($displayed_page) && $displayed_page + 1 < $pages ? '<li class="news-archive__pagination-page">...</li>' : '';
						if ($paged < $pages - 1 &&  $paged + $range - 1 < $pages && $showitems < $pages) echo '<li class="news-archive__pagination-page"><a href="' . get_pagenum_link($pages) . '">' . $pages . '</a></li>';
						echo $paged < $pages ? '<li class="news-archive__pagination-next"><a href="' . get_pagenum_link($paged + 1) . '"><span>Next Page</span></a></li>' : '';
						echo '</ul>';
						?>
					</div>
				<?php } ?>
			</div>
		</div>
	</section>
<?php

endif;
