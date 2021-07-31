<?php
/**
 * Register theme post types
 * 
 * Post types should always support revisions.
 * Please follow the same format for registering new post types.
 * 
 * Reference: https://developer.wordpress.org/reference/functions/register_post_type/
 * Dashicons for menu_icon: https://developer.wordpress.org/resource/dashicons/
 */

 namespace BaseTheme\PostTypes;

 /**
  * Get post type labels
  * 
  * @param  string $singular  Singular name for the post type.
  * @param  string $plural    Plural name for the post type.
  * @param  string $menu_name Name the post type will appear as in the admin sidebar.
  * @return array             Lables for registering a post type.     
  */
function get_labels( string $singular, string $plural = '', string $menu_name = '' ) : array {
    if ( empty( $plural ) ) {
        $plural = $singular . 's';
    }

    if ( empty( $menu_name ) ) {
        $menu_name = $plural;
    }

    return [
        'name'                  => _x( $plural, 'Post Type General Name', 'fasi' ),
        'singular_name'         => _x( $singular, 'Post Type Singular Name', 'fasi' ),
        'menu_name'             => __( $menu_name, 'fasi' ),
        'name_admin_bar'        => __( $singular, 'fasi' ),
        'archives'              => __( $singular . ' Archives', 'fasi' ),
        'attributes'            => __( $singular . ' Attributes', 'fasi' ),
        'parent_item_colon'     => __( 'Parent ' . $singular, 'fasi' ),
        'all_items'             => __( 'All ' . $plural, 'fasi' ),
        'add_new_item'          => __( 'Add New ' . $singular, 'fasi' ),
        'add_new'               => __( 'Add New', 'fasi' ),
        'new_item'              => __( 'New ' . $singular, 'fasi' ),
        'edit_item'             => __( 'Edit ' . $singular, 'fasi' ),
        'update_item'           => __( 'Update ' . $singular, 'fasi' ),
        'view_item'             => __( 'View ' . $singular, 'fasi' ),
        'view_items'            => __( 'View ' . $plural, 'fasi' ),
        'search_items'          => __( 'Search ' . $singular, 'fasi' ),
        'not_found'             => __( 'Not found', 'fasi' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'fasi' ),
        'featured_image'        => __( 'Featured Image', 'fasi' ),
        'set_featured_image'    => __( 'Set featured image', 'fasi' ),
        'remove_featured_image' => __( 'Remove featured image', 'fasi' ),
        'use_featured_image'    => __( 'Use as featured image', 'fasi' ),
        'insert_into_item'      => __( 'Insert into ' . strtolower( $singular ), 'fasi' ),
        'uploaded_to_this_item' => __( 'Uploaded to this ' . strtolower( $singular ), 'fasi' ),
        'items_list'            => __( $plural . ' list', 'fasi' ),
        'items_list_navigation' => __( $plural . ' list navigation', 'fasi' ),
        'filter_items_list'     => __( 'Filter ' . strtolower( $plural ) . ' list', 'fasi' ),
    ];
}

// Universal Block.
function universal_block() {
    register_post_type( 'universal_block', [
        'label'           => __( 'Universal Block', 'fasi' ),
        'labels'          => get_labels( 'Universal Block' ),
        'supports'        => [ 'title', 'revisions' ],
        'taxonomies'      => [],
        'public'          => true,
        'menu_icon'       => 'dashicons-editor-kitchensink',
        'has_archive'     => false,
    ] );
}
add_action( 'init', 'BaseTheme\PostTypes\universal_block' );

// Gallery.
function gallery() {
    register_post_type ( 'gallery', [
        'label'               => __( 'Gallery', 'fasi' ),
        'labels'              => get_labels( 'Gallery', 'Galleries' ),
        'supports'            => [ 'title', 'revisions' ],
        'taxonomies'          => [],
        'public'              => true,
        'menu_icon'           => 'dashicons-format-gallery',
        'has_archive'         => false,
    ] );
}
add_action( 'init', 'BaseTheme\PostTypes\gallery' );

// Staff.
function staff() {
    register_post_type ( 'staff', [
        'label'               => __( 'Staff', 'fasi' ),
        'labels'              => get_labels( 'Staff', 'Staff' ),
        'supports'            => [ 'title', 'editor', 'revisions', 'thumbnail' ],
        'taxonomies'          => [],
        'public'              => true,
        'menu_icon'           => 'dashicons-groups',
        'has_archive'         => false,
        'rewrite'             => [ 'slug' => 'team', 'with_front' => false ]
    ] );
}
add_action( 'init', 'BaseTheme\PostTypes\staff' );