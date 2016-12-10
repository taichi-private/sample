$(function() {
  var wd = $(window);
  var hd = $('.header');
  var sn = $('.side_content');
  var hd_h = hd.outerHeight();
  var sn_off_t = sn.offset().top;
  var mc = $('.main_content');
  var as = $('aside');
  var sc_bottom = mc.outerHeight() - sn.outerHeight();

  $(window).scroll(function () {
    if(hd_h < wd.scrollTop()){
      as.css('height',mc.outerHeight());
      sn.css('position','fixed');
      sn.css('top',85);
      sn.css('bottom','');
      if(sc_bottom < wd.scrollTop()) {
        sn.css('position','absolute');
        sn.css('bottom',0);
        sn.css('top','');
      }
    } else {
      as.css('height','');
      sn.css('position','');
    }
  });
});