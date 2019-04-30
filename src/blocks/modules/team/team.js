import $ from "jquery";
import 'slick-carousel'

$(document).ready(function(){
  $('.team__slider').slick({
    arrows:false,
    cssEase: 'linear',
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    dotsClass: 'slider-dots',
  });
});