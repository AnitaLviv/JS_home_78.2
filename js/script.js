 $('input').hover(showHint, hideHint);
  $('button.help, em.help').on('click', showHelp);
  
  function showHint() {
    $(this).parent().find('.hint').remove();
    $(this).parent().append("<span class='hint'>" 
                + $(this).attr('title') + "</span>");
  };

  function hideHint() {
    $(this).parent().find('.hint').remove();
  };

  function showHelp() {
    $('.form input').each(hideHint);
    $('.form input').each(showHint);    
  };

});
