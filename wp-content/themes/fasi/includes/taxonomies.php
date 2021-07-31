<?php
/**
 * Register theme taxonomies
 * 
 * Please follow the same format for registering new taxonomies.
 * 
 * Reference: https://developer.wordpress.org/reference/functions/register_taxonomy/
 */

 namespace BaseTheme\Taxonomies;

 /**
  * Get taxonomy labels
  * 
  * @param  string $singular  Singular name for the taxonomy.
  * @param  string $plural    Plural name for the taxonomy.
  * @param  string $menu_name Name the taxonomy will appear as in the admin sidebar.
  * @return array             Lables for registering a taxonomy.     
  */
function get_labels( string $singular, string $plural = '', string $menu_name = '' ) : array {
    if ( empty( $plural ) ) {
        $plural = $singular . 's';
    }

    if ( empty( $menu_name ) ) {
        $menu_name = $plural;
    }

    return [
		'name'                       => _x( $plural, 'Taxonomy General Name', 'fasi' ),
		'singular_name'              => _x( $singular, 'Taxonomy Singular Name', 'fasi' ),
		'menu_name'                  => __( $menu_name, 'fasi' ),
		'all_items'                  => __( 'All ' . $plural, 'fasi' ),
		'parent_item'                => __( 'Parent ' . $singular, 'fasi' ),
		'parent_item_colon'          => __( 'Parent ' . $singular . ':', 'fasi' ),
		'new_item_name'              => __( 'New ' . $singular . ' Name', 'fasi' ),
		'add_new_item'               => __( 'Add New ' . $singular, 'fasi' ),
		'edit_item'                  => __( 'Edit ' . $singular, 'fasi' ),
		'update_item'                => __( 'Update ' . $singular, 'fasi' ),
		'view_item'                  => __( 'View ' . $singular, 'fasi' ),
		'separate_items_with_commas' => __( 'Separate ' . strtolower( $plural ) . ' with commas', 'fasi' ),
		'add_or_remove_items'        => __( 'Add or remove ' . strtolower( $plural ), 'fasi' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'fasi' ),
		'popular_items'              => __( 'Popular ' . $plural, 'fasi' ),
		'search_items'               => __( 'Search ' . $plural, 'fasi' ),
		'not_found'                  => __( 'Not Found', 'fasi' ),
		'no_terms'                   => __( 'No ' . strtolower( $plural ), 'fasi' ),
		'items_list'                 => __( $plural . ' list', 'fasi' ),
		'items_list_navigation'      => __( $plural . ' list navigation', 'fasi' ),
    ];
}

// Type
// function type() {
//     $args = array(
//         'labels'                     => get_labels( 'Type' ),
// 		'hierarchical'               => false,
// 		'public'                     => true,
// 		'show_ui'                    => true,
// 		'show_admin_column'          => true,
//     );
    
// 	register_taxonomy( 'type', array( 'post', 'gallery' ), $args );
// }
// add_action( 'init', 'BaseTheme\Taxonomies\type' );
