$( () => {

  $('.toggleButton').hover(function() {
    $(this).toggleClass('btn-hover');
  });

  $('.toggleButton').click(function() {
    $(this).toggleClass('active');
  });

  $('.panel').height($(window).height() - $('nav').height() - 30);
  $('.panel').width(($(window).width() / 2) - 10);

});//
