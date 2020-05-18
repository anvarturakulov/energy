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
    });

    $(".review__inner").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
    });


      jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top-20;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
      });

});

