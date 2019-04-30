import $ from "jquery";
import 'slick-carousel'

$(document).ready(function(){
  $('.main-slider__init').slick({
    arrows:false,
    fade: false,
    cssEase: 'linear',
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slider-arrow slider-arrow__prev"></button>',
    nextArrow: '<button type="button" class="slider-arrow slider-arrow__next"></button>',
  });
  $('.main-slider__arrow').on('click', function() {
    const targetArrow = $(this).attr('href');
    const affsetTop = 0;
    $('html, body').animate({scrollTop: $(targetArrow).offset().top - affsetTop }, 800);
    return false;
  });
});