<?php
// Enregistrement des styles et scripts
function comparador_enqueue_scripts() {
    // Enregistrement du CSS personnalisé
    wp_enqueue_style('comparador-styles', get_stylesheet_directory_uri() . '/assets/css/custom.css');
    
    // Enregistrement du JavaScript personnalisé
    wp_enqueue_script('comparador-form', get_stylesheet_directory_uri() . '/assets/js/form.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'comparador_enqueue_scripts');

// Désactivation de l'éditeur Gutenberg pour notre template
function comparador_disable_gutenberg($is_enabled, $post_type) {
    if (is_page_template('template-landing.php')) return false;
    return $is_enabled;
}
add_filter('use_block_editor_for_post', 'comparador_disable_gutenberg', 10, 2);