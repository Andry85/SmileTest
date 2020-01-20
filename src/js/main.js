$(function() {

	/*********************************************************/
						/* START SLIDERS  */
	/********************************************************/
		$('.catalogSlider,.popularProductsSlider,.chooseBuyersSlider').owlCarousel({
			center: false,
			items: 5,
			loop: true,
			margin: 30,
			nav:true,
			dots: false,
		});

		$('.watchedProductsSlider').owlCarousel({
			center: false,
			items: 5,
			autoWidth:true,
			loop: true,
			margin: 0,
			nav:true,
			dots: false,
		});


		$('.articlesSlider').owlCarousel({
			center: false,
			items: 1.338,
			loop: true,
			margin: 31,
			nav:true,
			dots: false,
		});
	/*********************************************************/
						/* END MAIN SLIDERS  */
	/********************************************************/


	/*********************************************************/
						/* START PRODUCTS DESCRIPTION  */
	/********************************************************/
	$(".productFeaturesTabs__link").click(function(e){
		$(this).parent('li').addClass('active').siblings('li').removeClass('active');
	});
	/*********************************************************/
						/* END PRODUCTS TABS  */
	/********************************************************/


	/*********************************************************/
						/* START SHOW MORE ACTIONS  */
	/********************************************************/
		$( ".featuresTable tr:gt(6)" ).hide();
		$('.features .showMore').click(function(e){
			e.preventDefault();
			$(".featuresTable tr").each(function(){
				$(this).show();
			});
			$(this).hide();
		});

		$( ".productDescription__entry p:gt(1)" ).hide();
		$('.productDescription .showMore').click(function(e){
			e.preventDefault();
			$(".productDescription__entry p").each(function(){
				$(this).show();
			});
			$(this).hide();
		});

		$( ".reviewsList__body p:gt(1)" ).hide();
		$('.reviewsList__body .showMore').click(function(e){
			e.preventDefault();
			$(this).parents('.reviewsList__body').find('p').each(function(){
				$(this).show();
			});
			$(this).hide();
		});

		
		$( ".reviewsContainer__tab" ).each(function(){
			$(this).find('.reviewsList > li:gt(2)').hide();
		});

		$('.reviewsContainer__tab > .showMore').click(function(e){
			e.preventDefault();
			$(this).parent('.reviewsContainer__tab').find('.reviewsList > li').each(function(){
				$(this).show();
			});
			$(this).hide();
		});
	/*********************************************************/
						/* END SHOW MORE ACTIONS  */
	/********************************************************/



	/*********************************************************/
						/* START TABS  */
	/********************************************************/

		function callTabs(tabsLabels, tabsContainer, parentContainer) {
			tabsLabels.addClass('active').siblings('li').removeClass('active');
			tabsLabels.parents(parentContainer).find(tabsContainer + '> div')
			.eq(tabsLabels.index()).addClass('active').siblings('div').removeClass('active');
		}
	
		$(".reviewsTabs__item").click(function(e){
			e.preventDefault();
			callTabs($(this),'.reviewsContainer','.reviewsBlock');
		});

		$(".popularProductsList__item").click(function(e){
			e.preventDefault();
			callTabs($(this),'.popularTabsContainer','.popularProducts');
		});
	
	/*********************************************************/
						/* END TABS  */
	/********************************************************/


	

	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
    	$(".classic-select").select2({
		   theme: "classic",
		   minimumResultsForSearch: Infinity
		});
		$(".chosen-wrap--original .classic-select").select2({
			theme: "original",
			minimumResultsForSearch: Infinity
		});



    /*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 


	/*********************************************************/
						/* Setup thumbnails  */
	/********************************************************/
		var $easyzoom = $('.easyzoom').easyZoom();
		var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

		$('.easyzoomThums').on('click', 'a', function(e) {
			var $this = $(this);
			$this.parent('li').addClass('active').siblings().removeClass('active');
			e.preventDefault();
			// Use EasyZoom's `swap` method

	

			if ($this.hasClass("easyzoomThums__videolink")) {
				$('.easyzoom').hide();
				$('.videoBlock').show();
				player[2].playVideo();				
			} else {
				$('.easyzoom').show();
				$('.videoBlock').hide();
				player[2].stopVideo();
				
				api1.swap($this.data('standard'), $this.attr('href'));
			}
		
		});

		$('.code').click(function() {
			$('.movie').get(0).play(); 
		});

	/*********************************************************/
						/* End Setup thumbnails  */
	/********************************************************/ 

	/*********************************************************/
						/* START SCROLLING  */
	/********************************************************/

		// Add smooth scrolling to all links
		$(".productFeaturesTabs__link").on('click', function(event) {
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
		
			// Store hash
			var hash = this.hash;
		
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
		
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
			} // End if
		});

	/*********************************************************/
						/* END SCROLLING  */
	/********************************************************/	

	/*********************************************************/
						/* START VIDEO  */
	/********************************************************/
		$(".videoReviewsList__item--video0 > img").click(function(e){
			$(this).hide();
			player[0].playVideo();

		});
		$(".videoReviewsList__item--video1 > img").click(function(e){
			$(this).hide();
			player[1].playVideo();

		});

		
	/*********************************************************/
						/* END VIDEO  */
	/********************************************************/

	



	




	

	


});