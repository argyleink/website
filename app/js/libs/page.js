var Page = (function() {
  var pageWrap        = document.getElementById('pagewrap'),
      pages           = [].slice.call(pageWrap.querySelectorAll('.page')),
      currentPage     = 0,
      loader          = new SVGLoader(document.getElementById('loader'), { 
        speedIn : 100 
      });

  $('body').on('click', '.pageload-link', function(ev){
    ev.preventDefault();
    loader.show();
    jade.render($('#project')[0], 'project', {});
    App.Home.disable();
    // after some time hide loader
    setTimeout(function() {
      App.Project = new Article($('#project')[0], {
        trigger:  '#read'
      });
      loader.hide();

      classie.removeClass( pages[ currentPage ], 'show' );
      // update..
      currentPage = currentPage ? 0 : 1;
      classie.addClass( pages[ currentPage ], 'show' );

      if (currentPage === 0)
        App.Home.enable();

    }, 2000);
  });

  return {

  }
})();