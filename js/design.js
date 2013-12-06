$(document).ready(function(e) {

	$('#website').show();

	// Core
	var loadPage = function(a,b,c,d,e,f,g){
		$('#page' + b +', #page' + c +', #page' + d +', #page' + e +', #page' + f +', #page' + g).hide();
		$('#page' + a).show();	
	}


	// Triggers
	$('#home_link').click(function(){
		loadPage(1,2,3,4,5,6,7);
	});
	$('#description_link').click(function(){
		loadPage(2,1,3,4,5,6,7);
	});

	$('#wellness_link').click(function(){
		loadPage(3,4,5,6,7,1,2);
	});

	$('#house_link').click(function(){
		loadPage(4,5,6,7,1,2,3);
	});
	$('#design_link').click(function(){
		loadPage(5,6,7,1,2,3,4);
	});
	$('#services_link').click(function(){
		loadPage(6,5,7,1,2,3,4);
	});
	$('#contact_link').click(function(){
		loadPage(7,1,2,3,4,5,6);
	});

	var contact_triggered = 0;
	$('#contact_box_link').click(function(){
		if (contact_triggered == 0){
			$('#contact_box_content').show();
			contact_triggered = 1;
		} else {
			$('#contact_box_content').hide();
			contact_triggered = 0;
		}
		
	});

	$('.fontawesome-remove').click(function(){
		$('#contact_box_content').hide();
	});

	$('#chatsubmit').click(function(e){
		var chat_name = $('#chatname').val();
		var chat_email = $('#chatemail').val();
		var chat_message = $('#chatmessage').val();
		e.preventDefault();
		$('#contact_form_block').hide();
		$.ajax('http://ec2-54-194-41-182.eu-west-1.compute.amazonaws.com/mailer/', {
	      type: 'GET',
	      data: { "name": chat_name,
	        "email": chat_email,
	        "message": chat_message
	      },
	      success: function(response) {
	        $('#contact_confirm_block').fadeIn();
	        console.log("mail contact OK",response);
	        return false;
	      },
	      error: function(err){
	        return false;
	      }
	    });

	})

	$('#contactsubmit').click(function(e){
		var chat_name = $('#contactname').val();
		var chat_email = $('#contactemail').val();
		var chat_message = $('#contactmessage').val();
		e.preventDefault();
		$('#contact_page_form_block').hide();
		$.ajax('http://ec2-54-194-41-182.eu-west-1.compute.amazonaws.com/mailer/', {
	      type: 'GET',
	      data: { "name": chat_name,
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

$(document).click(function(e){
  if($(e.target).closest("#contact_box_link").length != 0) return false;
  if($(e.target).closest("#contact_box_content").length != 0) return false;
  $('#contact_box_content').hide();
});