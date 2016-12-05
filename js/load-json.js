$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});   

	var output = $('.swiper-wrapper');
	var winoutput = $('.swipe-wrap');
	
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
		observer: true
    });

	$.ajax({
		url: 'http://gestisciapp.it/sscg/db_to_app_home.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<div class="swiper-slide"><img src="http://gestisciapp.it/sscg/images/'+item.img+'" style="width:100%;"></img></div>';			
				output.append(landmark);
                                winoutput.append(landmark);
			}); 
			
    var element = document.getElementById('mySwipe'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next');

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: true,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});
			
		},
		error: function(){
			$( "#popupDialog" ).popup( "open" )
		   //output.text('Non sei connesso ad internet! Abilita una connessione dati e riavvia l\'app!');
		}
	});
	
});
