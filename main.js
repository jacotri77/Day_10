$(document).ready(function(){
	$("#accordion section h3").click(function(slide) {
    $(this).parents().siblings("section").addClass("hidden")
    $(this).parents("section").removeClass("hidden")

   
  })


})