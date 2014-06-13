var Page = (function() {
  var pageWrap        = document.getElementById('pagewrap'),
      pages           = [].slice.call(pageWrap.querySelectorAll('.page')),
      pageDOM,
      currentPage     = 0,
      loader          = new SVGLoader(document.getElementById('loader'), { 
        speedIn : 100 
      });

  function load(templateData) {
    loader.show();
    pageDOM = $('<div>');
    jade.render(pageDOM[0], 'project', templateData);
    if (templateData.url)
      $(pageDOM.find('#project-post')).load('ajax/' + templateData.url);
    App.Home.disable();
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
      // $('#grid li.shown').velocity(
      //   "transition.expandIn", { 
      //     stagger: 120 
      //   }
      // );
    } else {
      window.scrollTo(0,0);
      $('#project').html(pageDOM.html());
      $('#project header, #project .project-img').height(window.innerHeight);
      swapNav(true);
      $('#project > header').velocity("transition.slideDownIn");
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

  $('#grid').on('click', '> li:not(.title-box, .message, .social)', function(ev){
    ev.preventDefault();
    load(Projects[$(this).data().key]);
  });

  $('body').on('click', '.close-article', function(ev){
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