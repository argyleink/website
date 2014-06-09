var Page = (function() {
  var pageWrap        = document.getElementById('pagewrap'),
      pages           = [].slice.call(pageWrap.querySelectorAll('.page')),
      currentPage     = 0,
      loader          = new SVGLoader(document.getElementById('loader'), { 
        speedIn : 100 
      });

  function load(templateData) {
    loader.show();
    jade.render($('#project')[0], 'project', templateData);
    $('#project-post').load('ajax/' + templateData.url);
    App.Home.disable();
    // after some time hide loader
    setTimeout(hideAndSwap, 2000);
  }

  function hideAndSwap() {
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
  }

  $('#grid').on('click', '> li', function(ev){
    ev.preventDefault();
    load(Projects[$(this).data().key]);
  });
})();