$(document).ready(function() {

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

slideshow();
});