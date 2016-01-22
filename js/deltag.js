$('.carousel').carousel('pause');

$(".producto").on("click", function(){
	$(".producto").removeClass("selected");
	$(this).addClass("selected");
});