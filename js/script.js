


$(document).ready(function() {

$("input").hover( function() {
        var inputId = $(this).attr("id");
	
	console.log($("." + inputId));
        $("." + inputId).animate( {"opacity": "1"}, 200);
	
    }, function() {
        var inputId = $(this).attr("id");
        $("." + inputId).animate( {"opacity": "0"}, 100);

    } );

   
    $("button").click( function() {
        $(".tip").animate({"opacity": "1"}, "fast");
    } )
});
