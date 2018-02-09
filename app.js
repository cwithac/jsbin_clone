$( () => {

  $('.toggleButton').hover(function() {
    $(this).toggleClass('btn-hover');
  });

  $('.toggleButton').click(function() {
    $(this).toggleClass('active');
  });

});//
