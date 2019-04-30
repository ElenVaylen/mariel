import $ from "jquery";

$(document).ready(function(){
  $('.search__icon').on('click', function() {
    $('.search__wrap').addClass('search__active');
    let menuWidth = $('.top-menu__wrap').outerWidth();
    $('.search__active').css('width', menuWidth);
  });
  $('.header-main').on('mouseleave', function() {
    setTimeout(function() {
      $('.search__wrap').removeClass('search__active');
      $('.search__wrap').css('width', '0');
    }, 500);
  });
});