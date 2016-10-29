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
        	$("#" + pageOut + " > header").css("top", "calc(50% - 101px)");
		    $("#" + pageOut + " > *").css("opacity", "0");
		    $("#" + pageOut + " > *").css("visibility", "hidden");	
        }, 500);
        
        setTimeout(function(){
        	$("#" + pageOut).css("display", "none");
	    	animatePageIn(pageIn);
        }, 1250);	
	}
/*
	$(document).ready(function() {
	    $('#fullpage').fullpage();
	});
/*
	$.scrollify({
		section : ".work-element",
	});


	$(".work-grid").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
		                                // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
		pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: false,                  // You can activate the keyboard controls
		responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
		                                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
		                                // the browser's width is less than 600, the fallback will kick in.
		direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
*/

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