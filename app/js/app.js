var App = App || {};
$(function(){
  window.scrollTo(0,0);

  $('video').on('click', function(){
    this.play();
  });

  $('video').on('loadeddata playing canplay error stalled', function(){
    $('#white-cover').addClass('hidden');
  });
  
  // init cover page effect
  App.Home = new Article($('#home')[0], {
    trigger:  '#projects'
  });

  App.Grid = new GridScrollFx($('#grid')[0], {
    viewportFactor : 0.4
  });

  // set container height
  // watch it on resize, to reset app height, jqueries resize is throttled
  $(window).resize(setAppHeight);
  function setAppHeight() {
    Device.ipadAndUp = window.innerWidth >= 1024;
    $('.container .header').height(window.innerHeight);

    var videoBg = $('video');
    if (window.innerWidth / window.innerHeight > 1.77778)
      videoBg.css('margin-left', '').addClass('wide');
    else
      videoBg.css('margin-left', '-' + (videoBg.width() / 2 - 30) + 'px').removeClass('wide');
  }
  setAppHeight();

});