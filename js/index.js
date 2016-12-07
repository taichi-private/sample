$(function() {
  var wd = $(window);
  var sn = $('.side_content');
  var sn_off_t = sn.offset().top;

  $(window).scroll(function () {
    if(sn_off_t < wd.scrollTop()){
      sn.css('position','fixed');
    } else {
      sn.css('position','');
    }
  });
});