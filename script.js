

$(document).ready(function() {
	var visible = true;
   $('button').on('click', function() {
 $("header,main,footer").fadeToggle();
 if (visible) {
 	$(".button").text("Show Resume");
 	visible = false;
 
 } else {
 	$(".button").text("Hide Resume");
 	visible = true;
 	
 }
      });


});

