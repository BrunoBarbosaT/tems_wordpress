<?php get_header(); ?>
<div id="content" class="site-content">
    <div id="primary" class="content-area">
        <main id="main" class="site-main">

            <section class="pagee-blog">
                <div class="container">
                    <div class="blog-items">
                        <?php 
                                 
                                        while( have_posts() ) : the_post();
                                       
                                            ?>

                                        <?php
                                        get_template_part('parts/content', 'page');
                                        endwhile;
                                         ?>


                    </div>
                </div>
        </main>
    </div>
</div>
<?php get_footer(); ?>