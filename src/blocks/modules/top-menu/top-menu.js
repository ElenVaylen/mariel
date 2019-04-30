import $ from "jquery";

$(document).ready(function(){
  $('.top-menu__link').on('click', function() {
    const target = $(this).attr('href');
    const affsetTop = 0;
    $('html, body').animate({scrollTop: $(target).offset().top - affsetTop }, 800);
    return false;
  });
});