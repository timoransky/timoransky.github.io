$(function() {

	function animatePageIn(pageToAnimate) {
		$("#" + pageToAnimate).css("display", "flex");
		$("#" + pageToAnimate + " > *").css("display", "initial");

    	setTimeout(function(){
	    	$("#" + pageToAnimate + " > header").css("visibility", "visible");
    		$("#" + pageToAnimate + " > header").css("opacity", "1");
    		//$("#" + pageToAnimate + " > header").css("top", "0");
    		$("#" + pageToAnimate + " > header").addClass("animate");
        }, 250);

	    setTimeout(function(){
	    	$("#" + pageToAnimate + " > *").css("visibility", "visible");
	    	$("#" + pageToAnimate + " > *").css("opacity", "1");
    		$("#" + pageToAnimate + " h1").addClass("border-bottom");
        }, 750); 

        $("#" + pageToAnimate + " .close").addClass("grow");

        setTimeout(function(){
	    	$("#" + pageToAnimate + " .close").addClass("rotate");
        }, 500);   
	}

	function animatePageOut(pageOut, pageIn) {
		$("#" + pageOut + " h1").removeClass("border-bottom");
        $("#" + pageOut + " .close").removeClass("rotate");

        setTimeout(function(){
	    	$("#" + pageOut + " .close").removeClass("grow");
        }, 250); 

        setTimeout(function(){
        	//$("#" + pageOut + " > header").css("top", "calc(50% - 101px)");
        	$("#" + pageOut + " > header").removeClass("animate");
		    $("#" + pageOut + " > *").css("opacity", "0");
		    $("#" + pageOut + " > *").css("visibility", "hidden");	
        }, 500);
        
        setTimeout(function(){
        	$("#" + pageOut).css("display", "none");
	    	animatePageIn(pageIn);
        }, 1250);	
	}

	$("#index > *, #about > *, #work > *, #contact > *").css("opacity", "0");
	$("#index > *, #about > *, #work > *, #contact > *").css("visibility", "hidden");
	$("#index > *, #about > *, #work > *, #contact > *").css("display", "none");

	$("#index > *").css("opacity", "0");
    $("#index").css("visibility", "hidden");

    setTimeout(function(){
    	animatePageIn('index');
    }, 500);

	$("#show-about, #show-work, #show-contact").click(function(event) {
        animatePageOut("index", event.target.innerHTML)       
    });

    $(".go-back-button").click(function(event) {
    	animatePageOut(event.target.parentElement.id, "index");	
    });
});