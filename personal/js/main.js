$(function() {

	function animatePageIn(pageToAnimate) {
		$("#"+pageToAnimate).css("display", "flex");
		$("#"+pageToAnimate+" > *").css("display", "initial");
	    

    	setTimeout(function(){
	    	$("#"+pageToAnimate+" > header").css("visibility", "visible");
    		$("#"+pageToAnimate+" > header").css("opacity", "1");
    		$("#"+pageToAnimate+" > header").css("top", "0");
    		$("#"+pageToAnimate+" h1").addClass("border-bottom");
        }, 250);

	    setTimeout(function(){
	    	$("#"+pageToAnimate+" > *").css("visibility", "visible");
	    	$("#"+pageToAnimate+" > *").css("opacity", "1");
        }, 1000);    
	}

	$("#index > *, #about > *, #work > *, #contact > *").css("opacity", "0");
	$("#index > *, #about > *, #work > *, #contact > *").css("visibility", "hidden");
	$("#index > *, #about > *, #work > *, #contact > *").css("display", "none");

	$("#index > *").css("opacity", "0");
    $("#index").css("visibility", "hidden");
    //$("#"+pageToAnimate+" header").css("display", "block");

    setTimeout(function(){
    	animatePageIn('index');
    }, 500);

	$("#show-about, #show-work, #show-contact").click(function(event) {
        console.log('clicked show-' + event.target.innerHTML);

        $("#index h1").removeClass("border-bottom");
        $("#index > header").css("top", "calc(50% - 101px)");
        $("#index > *").css("opacity", "0");
        $("#index").css("visibility", "hidden");
        //$("#"+pageToAnimate+" header").css("display", "block");

        setTimeout(function(){
	    	animatePageIn(event.target.innerHTML);
        }, 1000);
        
    });

    $(".go-back-button").click(function(event) {
        console.log('clicked show-' + event.target.innerHTML);
        console.log(event.target.parentElement.id);
        
        $("#index h1, #about h1, #work h1, #contact h1").removeClass("border-bottom");
        $("#index > header, #about > header, #work > header, #contact > header").css("top", "calc(50% - 101px)");
        $("#about > *, #work > *, #contact > *").css("opacity", "0");
        $("#about > *, #work > *, #contact > *").css("visibility", "hidden");
        //
        //$("#index").css("display", "flex");
        setTimeout(function(){
        	$("#about, #work, #contact").css("display", "none");
	    	animatePageIn('index');
        }, 1000);
    });



    
});