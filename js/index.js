$(function() {
  var wd = $(window);
  var sn = $('.side_content');
  var sn_off_t = sn.offset().top;
  var mc = $('.main_content');
  var as = $('aside');
  //課題
  var sc_bottom = wd.height() - mc.outerHeight();

  console.log(sc_bottom);
  

  $(window).scroll(function () {
    console.log(wd.scrollTop());
    if(sn_off_t < wd.scrollTop()){
      as.css('height',mc.outerHeight());
      sn.css('position','fixed');
      //課題
      if(sc_bottom < wd.scrollTop()) {
        mc.css('background','red');
      }
    } else {
      as.css('height','');
      sn.css('position','');
    } 
  });
});