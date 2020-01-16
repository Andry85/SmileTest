$(function() {

	/*********************************************************/
						/* START MAIN SLIDER  */
	/********************************************************/
			$('#slider').owlCarousel({
                center: false,
                items: 1.5,
                loop: true,
                margin: 0,
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

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);
			e.preventDefault();
			// Use EasyZoom's `swap` method
			api1.swap($this.data('standard'), $this.attr('href'));
		});
	/*********************************************************/
						/* End Setup thumbnails  */
	/********************************************************/ 





	

	


});