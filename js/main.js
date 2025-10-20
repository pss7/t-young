
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  $("#section01 .slick").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 8000,
    speed: 2000,
  });

});