$(function(){
    $('.slider').slick({
        arrows: false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
            responsive:[
                {
                    breakpoint: 1175,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:2,
                        
                    }
            },
            {
                breakpoint: 769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,  
            }}
        ]
    });


    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

    
});
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]