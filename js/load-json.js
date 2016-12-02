$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});   

	var output = $('.swipe-wrap');
	

	$.ajax({
		url: 'http://gestisciapp.it/sscg/db_to_app_home.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<div><img src="http://gestisciapp.it/sscg/images/'+item.img+'" style="width:100%;"></img></div>';			
				output.append(landmark);

			}); 
			
		},
		error: function(){
			$( "#popupDialog" ).popup( "open" )
		   //output.text('Non sei connesso ad internet! Abilita una connessione dati e riavvia l\'app!');
		}
	});
	
});
