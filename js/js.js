$(document).ready(function () {
  $('.button[filter]').click(function () {
    if($(this).attr('filter') == 'all'){
      if($(this).attr('val') == 'off'){
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').show(300);
      }
    } else
      if ($(this).attr('val') == 'off'){
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').hide(300);
        var filter = $(this).attr('filter');
        $('.filter > div[filter='+filter+']').show(300);
      }
  })
})














/*$(document).ready(function () {
  $('.button[filter="web"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button[filter]').attr('val', 'off')
      $(this).attr('val', 'on');
      $('.filter > div').hide(300);
      $('.filter > div[filter="web"]').show(300);
    }
  });



  $('.button[filter="ud"]').click(function () {
    if($(this).attr('val')=='off') {
      $('.button[filter]').attr('val', 'off')
      $(this).attr('val', 'on')
      $('.filter > div').hide(300);
      $('.filter > div[filter="ud"]').show(300);
    }
  });



  $('.button[filter="mock"]').click(function () {
    if($(this).attr('val')=='off') {
      $('.button[filter]').attr('val', 'off')
      $(this).attr('val', 'on')
      $('.filter > div').hide(300);
      $('.filter > div[filter="mock"]').show(300);
    }
  });

  $('.button[filter="all"]').click(function () {
    if($(this).attr('val')=='off') {
      $('.button[filter]').attr('val', 'off')
      $(this).attr('val', 'on')
      $('.filter > div').show(300);
    }
  });
});*/