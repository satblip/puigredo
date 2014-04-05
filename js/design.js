// var contact_triggered = 0;
var agencyEmail;
var agencyName;
var senderEmail = "info@puigredo.com";
var senderName = "Puig Redo Website";





/* ----------- Agency Mod Script ----------- */
var agencyMod = function(id){
	/* Get Agencies from database */
	$.ajax
	({
	  url:"http://data.puigredo.com/agencies_data/data.php?r=agencies_list",
	  dataType:"json",
	  success: function(data)
	    {
	      	$(data).each(function(i){
		      	runData=data[i];
			    if (runData.id == id){
			    	agencyEmail = runData.email;
					agencyName = runData.name;
					$('#agency_contact').append(agencyName+"<br>"+agencyEmail);
			    }
			})
			if (agencyEmail == undefined || agencyName == undefined){
				agencyEmail = "info@puigredo.com";
				agencyName = "Puig Redo Info";
			}
	    },
	  error: function(err)
	    {
	    	agencyEmail = "info@puigredo.com";
			agencyName = "Puig Redo Info";
	    },
	});
}
/* ----------- Agency Mod Script ----------- */






/* ----------- Check if there is agency ID ----------- */
var pathname = window.location.pathname;
var agencyId = pathname.split('/')[1];
if (parseInt(agencyId) != NaN){
	agencyMod(parseInt(agencyId));
}else{
	agencyEmail = "info@puigredo.com";
	agencyName = "Puig Redo Info";
	$('#agency_contact').empty();
}
/* ----------- End of check if there is agency ID ----------- */





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

	// Valid email address
	function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	    return pattern.test(emailAddress);
	};

	$('#directsubmit').click(function(e){
		e.preventDefault();
		if(!isValidEmailAddress($('#directemail').val())) {
			$('#directemail').addClass('field_with_errors');
		} else {
			_gaq.push(['_trackEvent', 'Send_message_with_contact_box', 'load']);
			var chat_name = "DIRECT_EMAIL";
			var chat_email = $('#directemail').val();
			var chat_message = "DIRECT_EMAIL";
			e.preventDefault();
			// $('#contact_form_block').hide();
			$.ajax('http://data.puigredo.com/mailer/', {
		      type: 'GET',
		      data: { "agency_email": agencyEmail,
		      	"agency_name": agencyName,
		      	"sender_email": senderEmail,
				"sender_name": senderName,
		      	"name": chat_name,
		        "email": chat_email,
		        "message": chat_message
		      },
		      success: function(response) {
		        $('#contact_box_link').fadeOut();
		        $('#contact_box_link_confirm').fadeIn();
		        console.log("mail contact OK",response);
		        return false;
		      },
		      error: function(err){
		        return false;
		      }
		    });
		}

	})

	$('#contactsubmit').click(function(e){
		e.preventDefault();
		if(!isValidEmailAddress($('#contactemail').val())) {
			$('#contactemail').addClass('field_with_errors');
		} else {
			_gaq.push(['_trackEvent', 'Send_message_with_contact_page', 'load']);
			var chat_name = $('#contactname').val();
			var chat_email = $('#contactemail').val();
			var chat_message = $('#contactmessage').val();
			e.preventDefault();
			$('#contact_page_form_block').hide();
			$.ajax('http://data.puigredo.com/mailer/', {
		      type: 'GET',
		      data: { "agency_email": agencyEmail,
		      	"agency_name": agencyName,
		      	"sender_email": senderEmail,
				"sender_name": senderName,
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
		}
	})



});

// $(document).click(function(e){
//   if($(e.target).closest("#contact_box_link").length != 0) return false;
//   if($(e.target).closest("#contact_box_content").length != 0) return false;
//   $('#contact_box_content').hide();
//   contact_triggered = 0;
// });