$(function(){
  window.scrollTo(0,0);
  
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
    console.log('w: ' + window.innerWidth);
    console.log('h: ' + window.innerHeight);
    if (window.innerWidth / window.innerHeight > 1.77778)
      videoBg.css('margin-left', '').addClass('wide');
    else
      videoBg.css('margin-left', '-' + (videoBg.width() / 2 - 30) + 'px').removeClass('wide');
  }
  setAppHeight();

});