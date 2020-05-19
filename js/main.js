$(function(){

    $(".rate-star").rateYo({
      rating: 5,
      starWidth: "16px",
      readOnly: true,
      ratedFill: "#0072bc"
    });

    

    $(".services__itembox").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 3,
            
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".review__inner").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          }
        }
      ]
    });


      jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top-20;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
      });

      $('.menu__btn').on('click',function(){
        $('.menu').slideToggle();
      });

});

