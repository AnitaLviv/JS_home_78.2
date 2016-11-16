$(function() {
  
 $( "#firstname" ).after( "<span class='firstname'>Please enter your firstname.</span>" );
 $(".firstname").css("opacity", "0");
    
 $('#firstname').hover(
     function(){
       $(".firstname").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".firstname").animate({
        opacity: 0,
        }, 1000 );
 });
 
  
  $( "#lastname" ).after( "<span class='lastname'>Please enter your lastname.</span>" );
 $(".lastname").css("opacity", "0");
    
 $('#lastname').hover(
     function(){
       $(".lastname").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".lastname").animate({
        opacity: 0,
        }, 1000 );
 });
 
 
 $( "#email" ).after( "<span class='email'>Put your email.</span>" );
 $(".email").css("opacity", "0");
    
 $('#email').hover(
     function(){
       $(".email").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".email").animate({
        opacity: 0,
        }, 1000 );
 });
       

}); 
