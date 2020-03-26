$(function(){

  $('.slider__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear', 
    autoplay: true,
    autoplaySpeed: 1000, 
    asNavFor: '.slider__nav-jpg'
  });

  $('.slider__nav-jpg').slick({ 
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    variableWidth: true, 
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
});