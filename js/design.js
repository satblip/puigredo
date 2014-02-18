
// var contact_triggered = 0;
var agency_email = "info@puigredo.com";
var agency_name = "Puig Redo Info";

$(document).ready(function(e) {



	// Core
	var loadPage = function(a,b,c,d,e,f,g){
		$('#page' + b +', #page' + c +', #page' + d +', #page' + e +', #page' + f +', #page' + g).hide();
		$('#page' + a).show();	
	}


	// Triggers
	$('#home_link').click(function(){
		loadPage(1,2,3,4,5,6,7);
		_gaq.push(['_trackEvent', 'Page_Home', 'load']);
	});
	$('#description_link').click(function(){
		loadPage(2,1,3,4,5,6,7);
		_gaq.push(['_trackEvent', 'Page_Description', 'load']);
	});
	$('#wellness_link').click(function(){
		loadPage(3,4,5,6,7,1,2);
		_gaq.push(['_trackEvent', 'Page_Wellness', 'load']);
	});
	$('#house_link').click(function(){
		loadPage(4,5,6,7,1,2,3);
		_gaq.push(['_trackEvent', 'Page_House', 'load']);
	});
	$('#design_link').click(function(){
		loadPage(5,6,7,1,2,3,4);
		_gaq.push(['_trackEvent', 'Page_Design', 'load']);
	});
	$('#services_link').click(function(){
		loadPage(6,5,7,1,2,3,4);
		_gaq.push(['_trackEvent', 'Page_Services', 'load']);
	});
	$('#contact_link').click(function(){
		loadPage(7,1,2,3,4,5,6);
		_gaq.push(['_trackEvent', 'Page_Contact', 'load']);
	});

	// $('#contact_box_link').click(function(){
	// 	if (contact_triggered == 0){
	// 		$('#contact_box_content').show();
	// 		_gaq.push(['_trackEvent', 'Contact_Box', 'load']);
	// 		contact_triggered = 1;
	// 	} else {
	// 		$('#contact_box_content').hide();
	// 		contact_triggered = 0;
	// 	}
		
	// });

	$('.fontawesome-remove').click(function(){
		$('#contact_box_content').hide();
		contact_triggered = 0;
	});

	$('#directsubmit').click(function(e){
		_gaq.push(['_trackEvent', 'Send_message_with_contact_box', 'load']);
		var chat_name = "DIRECT_EMAIL";
		var chat_email = $('#directemail').val();
		var chat_message = "DIRECT_EMAIL";
		e.preventDefault();
		// $('#contact_form_block').hide();
		$.ajax('http://ec2-54-194-41-182.eu-west-1.compute.amazonaws.com/mailer/', {
	      type: 'GET',
	      data: { "agency_email": agency_email,
	      	"agency_name": agency_name,
	      	"name": chat_name,
	        "email": chat_email,
	        "message": chat_message
	      },
	      success: function(response) {
	        // $('#contact_confirm_block').fadeIn();
	        $('#contact_box_link').fadeOut();
	        $('#contact_box_link_confirm').fadeIn();
	        console.log("mail contact OK",response);
	        return false;
	      },
	      error: function(err){
	        return false;
	      }
	    });

	})

	$('#contactsubmit').click(function(e){
		_gaq.push(['_trackEvent', 'Send_message_with_contact_page', 'load']);
		var chat_name = $('#contactname').val();
		var chat_email = $('#contactemail').val();
		var chat_message = $('#contactmessage').val();
		e.preventDefault();
		$('#contact_page_form_block').hide();
		$.ajax('http://ec2-54-194-41-182.eu-west-1.compute.amazonaws.com/mailer/', {
	      type: 'GET',
	      data: { "agency_email": agency_email,
	      	"agency_name": agency_name,
	      	"name": chat_name,
	        "email": chat_email,
	        "message": chat_message
	      },
	      success: function(response) {
	        $('#contact_page_confirm_block').fadeIn();
	        console.log("mail contact OK",response);
	        return false;
	      },
	      error: function(err){
	        return false;
	      }
	    });
	})



});

// $(document).click(function(e){
//   if($(e.target).closest("#contact_box_link").length != 0) return false;
//   if($(e.target).closest("#contact_box_content").length != 0) return false;
//   $('#contact_box_content').hide();
//   contact_triggered = 0;
// });