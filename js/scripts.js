$(document).ready(function() {


// page slide
// animates scrollTop to the position of the 
// corresponding id when nav bars are clicked

var links = {
	// class of the link		// id of the anchor tag to scroll to
	".goToResume" 			:		"a#resume",
	".goToInterests" 		: 		"a#interests",
	".goToPictures" 		: 		"a#pictures"
}

function pageSlide(){
	// for each item in the links object
	$.each(links, function(linkClass, anchorId){
		// animate scrollTop to the position of the
		// corresponding id when the nav bars are clicked
		$(linkClass).click(function(event) {
			$('html,body').animate({
				scrollTop: $(anchorId).offset().top
			}, 'slow');
		})
	});
}

// random quote
// selects the 7 quotes from the DOM
// picks a random number to start from
// unhides the quote at that index

function randomQuote() {

	// fade properties	
	var fadeTime = 1800;
	var delay = 14000;

	// get all the hidden quotes in the top
	var quotes = [];
	$(".a-quote").each(function(key, value){
		quotes.push(value);
	});
	// select a random quote
	var max = quotes.length;
	var min = 1;
	var	startIndex = Math.floor(Math.random() * ((max - min) + 1))
	var startQuote = $(quotes[startIndex]);

	function nextQuote(index){
		$(quotes[index]).fadeOut(fadeTime);
		if (index === (max - 1)){
			index = min;
		}
		index = index + 1;

		// when old quote is finished fading out,
		// fade in new quote
		setTimeout(function(){
			$(quotes[index]).fadeIn(fadeTime);
		}, fadeTime);

		// recurse every 14 seconds
		setTimeout(function(){
			nextQuote(index);
		}, delay);
	}

	$(startQuote).fadeIn(fadeTime);
	setTimeout(function(){
		nextQuote(startIndex);
	}, delay);
}

// slideshow

function slideshow(){

	var picarray = [];
	var textarray = [];
	var picFadeDelay = 300;
	var index = 0; // index of this array

	// add all pics to picarray
	$(".pic").each(function () {
		picarray.push($(this));
	});

	$(".text").each(function () {
		textarray.push($(this));
	});

	for (var i = 1; i < picarray.length; i++) {
	    $(textarray[i]).addClass("invis");
	}

	function nextOrPrevious (next) {
		console.log(next);
	    if (next == true) { // they clicked the right button to go forwards
		    console.log(index);
		    console.log(picarray[index]);

			$(picarray[index]).fadeOut(picFadeDelay);
			$(textarray[index]).fadeOut(picFadeDelay);
			
			if (index == (picarray.length - 1)) {
			    index = 0;
			}
			else {
			    index = (index + 1);
			}
			setTimeout(function(){
				$(picarray[index]).fadeIn(picFadeDelay);
				$(textarray[index]).fadeIn(picFadeDelay);
		    
			}, picFadeDelay);
		}
	    else { // they clicked the left button to go backwards
			$(picarray[index]).fadeOut(picFadeDelay);
			$(textarray[index]).fadeOut(picFadeDelay);
				
			if (index == 0) {
			    index = (picarray.length - 1);
			}
			else {
			    index = (index - 1);
			}
			setTimeout(function(){
				$(picarray[index]).fadeIn(picFadeDelay);
				$(textarray[index]).fadeIn(picFadeDelay);
			}, picFadeDelay);
		}

	} // end nextOrPrevious

	$(".left").click(function(){
		nextOrPrevious(false);
	    });
	$(".right").click(function(){
		nextOrPrevious(true);
	});

	$(document).keydown(function(e){
		if (e.keyCode == 37) { // left arrow
		    nextOrPrevious(false);
		}
		if (e.keyCode == 39) { // right arrow
		    nextOrPrevious(true);
		}
	});
}


// call continuous functions

pageSlide();
randomQuote();
slideshow();
});

