$(function(){

  // set container height
  // watch it on resize, to reset app height, jqueries resize is throttled
  $(window).resize(setAppHeight);
  function setAppHeight() {
    App.Browser.ipadAndUp = window.innerWidth >= 1024;
  }
  setAppHeight();

  var gridData = {
    projects: [
      { image: 'http://placebox.es/400/400', title: 'Title'},
      { image: 'http://placebox.es/400/600', title: 'Title'},
      { image: 'http://placebox.es/400/500', title: 'Title'},
      { image: 'http://placebox.es/400/300', title: 'Title'},
      { image: 'http://placebox.es/400/700', title: 'Title'}
    ]
  };
  jade.render($('#grid')[0], 'grid', gridData);

  new GridScrollFx( document.getElementById( 'grid' ), {
    viewportFactor : 0.4
  });

});