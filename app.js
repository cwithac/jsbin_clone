$( () => {

  $('.toggleButton').hover(function() {
    $(this).toggleClass('btn-hover');
  });

  $('.toggleButton').click(function() {
    $(this).toggleClass('active');
  });

  $('textarea').on('change keyup paste', function() {
    $('iframe').contents().find('html').html($('#html-panel').val());
  })



  $('.panel').height($(window).height() - $('nav').height() - 30);
  $('.panel').width(($(window).width() / 2) - 10);


});//
