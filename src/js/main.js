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