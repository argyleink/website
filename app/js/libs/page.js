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
    window.scrollTo(0,0);
    // after some time hide loader
    setTimeout(hideAndSwap, 1000);
  }

  function hideAndSwap() {
    classie.removeClass( pages[ currentPage ], 'show' );
    // update..
    currentPage = currentPage ? 0 : 1;

    if (currentPage === 0) {
      App.Home.enable();
      swapNav(false);
    } else {
      swapNav(true);
      $('#project').velocity({ 
        translateY: ["0","-20px"],
        opacity:    ["1","0"]
      });
    }

    classie.addClass( pages[ currentPage ], 'show' );
  }

  function swapNav(showDetail) {
    var nav = $('nav');
    if (showDetail) {
      nav.find('> .detail').removeClass('hidden');
      nav.find('> .default').addClass('hidden');
    } else {
      nav.find('> .detail').addClass('hidden');
      nav.find('> .default').removeClass('hidden');
    }
  }

  $('#grid').on('click', '> li:not(.title-box)', function(ev){
    ev.preventDefault();
    load(Projects[$(this).data().key]);
  });

  $('body').on('click', '#close-article', function(ev){
    hideAndSwap();
    $('#project').empty();
    Page.loader.hide();
  });

  return {
    load:   load,
    loader: loader,
    toggle: hideAndSwap
  }
})();