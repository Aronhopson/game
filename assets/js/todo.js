//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

	$("input[type='text'").keypress(function(event){
		if(event.which === 13){
			var todoText = $(this).val();
			$(this).val("");
			$("ul").append("<li><span>X</span> " + todoText + "</li>")
		}
	});
	

	$(".fa-plus").click(function(){
		// $("input[type='text'").fadeToggle()
	});

	//if li is gray
 //    if($(this).css("color") === "rgb(128, 128, 128)"){
    
	// //turn it to black
 //      $(this).css({
 //         color: "purple",
	// 	textDecoration : "none"
	// 	});
	//   }
	// //else
	// else{
	// 	//turn it to gray
	
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration : "line-through"
	// 	});
	// }
	
