$(document).ready(function(){

	$("#submit").click(function(e){

	    // if user hits submit, existing error spans disappear
	    $(".error").hide(); 

	    // no errors to start
	    var error = false;
	    var validemail = /^([\w-\.]+@[\w-]+\.[\w]{2,4})?$/;
	    var emailvalue = $("#email").val();

	    // if the email field is blank
	    if ((emailvalue == "") || (emailvalue == null)){
		$("#email").after('<p class="error">You forgot to write your email!</p>');
		error = true;
	    }

	    // if the email field is invalid (fails regexp test)
	    if (!validemail.test(emailvalue)) {
		$("#email").after('<p class="error">Your email doesn\'t seem valid, are you sure there are no typos?</p>');
		error = true;
	    }
	    
	    // if there are no errors 
	    if (!error) {
		$.post("send-humdinger-email.php", 
		       { email: emailvalue },
		       function(data) {
			   $(".sendEmail").fadeOut("normal", function() {
				   $(".sendEmail").after('<p class="thankyou">Thanks!</p>');
			       });
		       });
	    }
	    return false;
	    });

	// STYLE THE EMAIL INPUT BOX
	$('input[type="text"], textarea').addClass("idleField");
	$('input[type="text"], textarea').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
		if (this.value == this.defaultValue){
		    this.value = '';
		}
		if(this.value != this.defaultValue){
		    this.select();
		}
	    });
	$('input[type="text"], textarea').blur(function() {
		$(this).removeClass("focusField").addClass("idleField");
		if ($.trim(this.value) == ''){
		    this.value = (this.defaultValue ? this.defaultValue : '');
		}
	    });
	
	// CYCLE THROUGH THE PICTURES

	function imgss() {
	    $('#4ss').fadeIn('medium', function() {
		    $('#4ss').delay(5000).fadeOut('medium', function() {
			    $('#1ss').fadeIn('medium', function() {
				    $('#1ss').delay(5000).fadeOut('medium', function() {
					    $('#2ss').fadeIn('medium', function() {
						    $('#2ss').delay(5000).fadeOut('medium', function() {
							    $('#3ss').fadeIn('medium', function() {
								    $('#3ss').delay(5000).fadeOut('medium', function() {
									    $('#4ss').fadeIn('medium', imgss());
									});
								});
							});
						});
					});
				});
			});
		});
	}
	imgss();


    });