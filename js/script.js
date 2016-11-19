$(function(){
    var $helpText = $('.helpText');
    var $btn = $('#btn');
    
    $btn.on('click', function(){
        $helpText.fadeIn(500);   
    });
        $('.named').hover(function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeIn(500);
        },function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeOut(500);
        
        });
    
    
    
  
                 
});
