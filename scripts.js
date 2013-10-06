$(document).ready(function() {

function goToByScroll(id){
      $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

alert('something');

});