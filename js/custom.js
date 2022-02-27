/**
 * Created by lenovo on 9/19/17.
 */
$(document).ready(function () {
  $('.for-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    arrows: true
  });


  $('div#menu').mmenu({
    slidingSubmenus: false
  });
});