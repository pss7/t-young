$(function () {

  /* 헤더 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('scroll');
    } else {
      $('#header').removeClass('scroll');
    }
  });

  $('#header .mobileBtn').click(function () {
    $('#header .mobileMenuBox').animate({
      right: 0
    })
  });

  $('#header .mobileMenuBox .mobileCloseBtn').click(function () {
    $('#header .mobileMenuBox').animate({
      right: -3000
    })
  });

  //스크롤 시 top 버튼 fadeIn, fadeOut
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#linkBox').fadeIn();
    } else {
      $('#linkBox').fadeOut();
    }
  });

  //상단으로 이동
  $("#linkBox .top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

})