$(function() {

	/*********************************************************/
						/* START MAIN SLIDER  */
	/********************************************************/
		$('.catalogSlider').owlCarousel({
			center: false,
			items: 5,
			loop: true,
			margin: 30,
			nav:true,
			dots: false,
		});
	/*********************************************************/
						/* END MAIN SLIDER  */
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
						/* START FEATURES ACCORDION  */
	/********************************************************/
		$( ".featuresTable tr:gt(6)" ).hide();
		$('.features .showMore').click(function(e){
			e.preventDefault();
			if ($(this).hasClass('opened')) {
				$(".featuresTable tr").each(function(){
					$( ".featuresTable tr:gt(6)" ).hide();
				});		
			} else {
				$(".featuresTable tr").each(function(){
					$(this).show();
				});	
			}
			$(this).toggleClass('opened');
		});
	/*********************************************************/
						/* END FEATURES ACCORDION  */
	/********************************************************/



	/*********************************************************/
						/* START PRODUCTS TABS  */
	/********************************************************/

		// function callTabs(tabsLabels, tabsContainer, parentContainer) {
		// 	tabsLabels.addClass('active').siblings('li').removeClass('active');
		// 	tabsLabels.parents(parentContainer).find(tabsContainer + '> div')
		// 	.eq(tabsLabels.index()).addClass('active').siblings('div').removeClass('active');
		// }
	
		// $(".productFeaturesTabs__item").click(function(e){
		// 	e.preventDefault();
		// 	callTabs($(this),'.tabsContainer','.productFeatures');
		// });
	
	/*********************************************************/
						/* END PRODUCTS TABS  */
	/********************************************************/


	

	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
    	$(".classic-select").select2({
		   theme: "classic",
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
			} else {
				$('.easyzoom').show();
				$('.videoBlock').hide();
				
				api1.swap($this.data('standard'), $this.attr('href'));
			}
		
		});

		$('.code').click(function() {
			$('.movie').get(0).play(); 
		});

	/*********************************************************/
						/* End Setup thumbnails  */
	/********************************************************/ 





	

	


});