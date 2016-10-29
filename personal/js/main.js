$(function() {

	function animatePageIn(pageToAnimate) {
		$("#" + pageToAnimate).css("display", "flex");
		$("#" + pageToAnimate + " > *").css("display", "initial");

    	setTimeout(function(){
	    	$("#" + pageToAnimate + " > header").css("visibility", "visible");
    		$("#" + pageToAnimate + " > header").css("opacity", "1");
    		$("#" + pageToAnimate + " > header").css("top", "0");
        }, 250);


	    setTimeout(function(){
	    	$("#" + pageToAnimate + " > *").css("visibility", "visible");
	    	$("#" + pageToAnimate + " > *").css("opacity", "1");
    		$("#" + pageToAnimate + " h1").addClass("border-bottom");
        }, 1000); 

        $("#" + pageToAnimate + " .close").addClass("grow");
        setTimeout(function(){
	    	$("#" + pageToAnimate + " .close").addClass("rotate");
        }, 500);   
	}

	function animatePageOut(pageToAnimate) {
		$("#" + pageToAnimate + " h1").removeClass("border-bottom");

        $("#" + pageToAnimate + " .close").removeClass("rotate");

        setTimeout(function(){
	    	$("#" + pageToAnimate + " .close").removeClass("grow");
        }, 1000); 

        setTimeout(function(){
        	$("#" + pageToAnimate + " > header").css("top", "calc(50% - 101px)");
		    $("#" + pageToAnimate + " > *").css("opacity", "0");
		    $("#" + pageToAnimate + " > *").css("visibility", "hidden");	
        }, 500);
        
        setTimeout(function(){
        	$("#" + pageToAnimate).css("display", "none");
	    	animatePageIn("index");
        }, 1200);	
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
		$("#index h1").removeClass("border-bottom");

        setTimeout(function(){
        	$("#index > header").css("top", "calc(50% - 101px)");
	        $("#index > *").css("opacity", "0");
	        $("#index").css("visibility", "hidden");	
        }, 500);
        
        setTimeout(function(){
	    	animatePageIn(event.target.innerHTML);
        }, 1200);
        
    });

    $(".go-back-button").click(function(event) {
    	animatePageOut(event.target.parentElement.id);	
    });



    
});