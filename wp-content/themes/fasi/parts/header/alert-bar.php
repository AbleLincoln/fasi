<?php

$display_alert = get_field( 'display_alert', 'option' );
$alert_text = get_field( 'alert_text', 'option' );
$alert_link = get_field( 'alert_link', 'option' );

if ( true === $display_alert && ! empty( $alert_text ) ) : ?>
  <div class="alert-bar  js-alert-bar">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p>
            <span><?php echo esc_html( $alert_text ); ?></span>
            <?php echo ! empty( $alert_link ) ? Content_Block::acf_link( $alert_link, '', false ) : ''; ?>
          </p>
        </div>
      </div>
    </div>
    <button class="alert-bar__close  js-alert-bar-close" aria-label="Dismiss alert"></button>
  </div>
<?php endif; ?>