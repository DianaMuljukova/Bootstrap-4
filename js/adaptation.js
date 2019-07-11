//Плавное меню

$('ul.menu a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 500);
  $('ul.menu a[href^="#"]').css({'color': '#212121'});
  $(this).css({'color': '#cecece'})
  return false;
});

//Кнопка наверх

$(window).scroll(function () {
  if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});
$('#toTop').click(function () {
  $('body, html').animate({
    scrollTop: 0
  }, 500)
});

//Выпадающее меню

$('.menu-icon').click(function () {
  $('nav').slideToggle(500);
  $('ul.menu').css({
    'display': 'flex',
    'flex-direction': 'column'
  })
  if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>'){
    $(this).html('<i class="fas fa-times"></i>')
  } else {
    $(this).html('<i class="fas fa-bars"></i>')
  }
})