$('.carousel').carousel('pause');


var nombres = ["Bolsas de congelamiento NL (CryoStore Freezing Bag)", "DMSO USP", "Sistemas de almacenaje"];
var descripciones = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error necessitatibus quia eum, ullam nesciunt vero quae ipsa ipsam nulla maiores aut omnis? A adipisci quod odit pariatur, quaerat autem error.",
"Lorem 2", "Lorem 3"];

//Primer elemento
$(".producto-nombre").text(nombres[0]);
$(".producto-descripcion").text(descripciones[0]);


$(".producto").on("click", function(){
	$(".producto").removeClass("selected");
	$(this).addClass("selected");

	var index = Math.floor($(this).index()/2);
	$(".producto-nombre").text(nombres[index]);
	$(".producto-descripcion").text(descripciones[index]);
});