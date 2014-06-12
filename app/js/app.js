$(function(){
  // init cover page effect
  App.Home = new Article($('#home')[0], {
    trigger:  '#projects'
  });

  // render grid
  jade.render($('#grid')[0], 'grid', {projects: Projects});
  App.Grid = new GridScrollFx($('#grid')[0], {
    viewportFactor : 0.4
  });

  $('video').on('loadeddata', function(){
    $('#white-cover').remove();
  });

  // set container height
  // watch it on resize, to reset app height, jqueries resize is throttled
  $(window).resize(setAppHeight);
  function setAppHeight() {
    App.Browser.ipadAndUp = window.innerWidth >= 1024;
    $('.container .header').height(window.innerHeight);

    var videoBg = $('video');
    if (window.innerWidth / window.innerHeight > 1.781)
      videoBg.css('margin-left', '').addClass('wide');
    else
      videoBg.css('margin-left', '-' + (videoBg.width() / 2) + 'px').removeClass('wide');
  }
  setAppHeight();

});