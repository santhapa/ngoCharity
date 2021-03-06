<?php
/**
 * The main template file.
 * @package NgoCharity
 */

get_header();
?>

<div class="container">
	<div class="row">
  		<div class="span9">
		<?php if ( have_posts() ) : ?>

			<?php 
				while ( have_posts() ) : the_post(); ?>
				<?php
					get_template_part( 'content' );
				?>
			<?php endwhile; ?>

			<?php 
				if (function_exists("ngoCharity_pagination_nav"))
				{
				    ngoCharity_pagination_nav();
				}
			?>
				
		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>
		</div>
		
		<div class="span3">
	    	<?php get_sidebar('right'); ?>
	    </div>
	</div>
</div><!-- /container --> 

<?php get_footer(); ?>
