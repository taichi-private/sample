$(function() {
  var wd = $(window);
  var sn = $('.side_content');
  var sn_off_t = sn.offset().top;
  var mc = $('.main_content');
  var as = $('aside');
  var sc_bottom = mc.outerHeight() - sn.outerHeight();

  console.log(sc_bottom);

  $(window).scroll(function () {
    console.log(wd.scrollTop());
    if(sn_off_t < wd.scrollTop()){
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