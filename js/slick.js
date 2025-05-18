$(function () {
  $(".e-s-person-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-s-person-list-left",
    nextArrow: ".e-s-person-list-right",
  });
});
