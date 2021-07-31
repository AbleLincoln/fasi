<?php
function disable_hash_scroll() {
  wp_register_script( 'disable-hash-scroll', '' );
  wp_enqueue_script( 'disable-hash-scroll' );
  wp_add_inline_script( 'disable-hash-scroll', 'if ( window.location.hash ) { scroll(0,0); } setTimeout( function() { scroll(0,0); console.log("late inline js"); }, 1); console.log("inline js");' );
}
add_action( 'wp_enqueue_scripts', 'disable_hash_scroll' );