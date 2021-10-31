console.log("taking file");

$(document).ready(function () {
  $(".burger").click(function () {
    $(this).toggleClass("open");
    $(".slider").toggleClass("active");
  });
  //   $(".burger-close").click(function(){
  //     $(".burger").removeClass("open");
  //     $(".slider").removeClass("active");
  //   })




  $(".portfolio-carousel").slick({
    lazyLoad: "ondemand",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    margin: 10,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonal-wrapper").slick({
    lazyLoad: "ondemand",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

});