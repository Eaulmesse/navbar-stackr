<?php 

add_theme_support('title-tag');

function add_custom_js() {
    wp_enqueue_script('custom-js', get_template_directory_uri().'/assets/js/main.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'add_custom_js');


?>