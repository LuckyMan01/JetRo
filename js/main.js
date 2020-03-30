$(function(){

  $('.slider__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear', 
    autoplay: true,
    autoplaySpeed: 3000, 
    asNavFor: '.slider__nav-jpg'
  });

  $('.slider__nav-jpg').slick({ 
    slidesToScroll: 1,
    slidesToShow: 6,
    asNavFor: '.slider__inner',
    variableWidth: true, 
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-list').slideToggle();
   
  });
});