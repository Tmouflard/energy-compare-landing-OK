<?php
/*
Template Name: Landing Page Comparador
*/

get_header(); ?>

<div class="landing-page">
    <div class="form-container">
        <div class="progress-bar">
            <div class="step-indicator active">1</div>
            <div class="step-line"></div>
            <div class="step-indicator">2</div>
            <div class="step-line"></div>
            <div class="step-indicator">3</div>
            <div class="step-line"></div>
            <div class="step-indicator">4</div>
            <div class="step-line"></div>
            <div class="step-indicator">5</div>
        </div>

        <form id="energyForm">
            <!-- Les étapes du formulaire restent identiques -->
            <?php include(get_template_directory() . '/template-parts/form-steps.php'); ?>
        </form>
    </div>
</div>

<?php get_footer(); ?>