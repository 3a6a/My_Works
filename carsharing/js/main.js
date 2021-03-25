$(function(){

$('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
          
            dots: false
          }
        
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1141,
          settings: {
            slidesToShow: 3
          }
          },
          {breakpoint: 846,
          settings: {
            slidesToShow: 2
          }
          },
          {breakpoint: 585,
          settings: {
            slidesToShow: 1
          }
        
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
})

$('.menu__btn').on('click', function(){
$('.menu__list').toggleClass('menu__list--active');
});

});