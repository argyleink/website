var Article = (function(el, options) {
  if (!el)              return console.log("missing element");
  if (!options.trigger) return console.log("missing trigger");

  // detect if IE : from http://stackoverflow.com/a/16657946    
  var ie = App.Browser.msie;

  // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179          
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = [32, 37, 38, 39, 40], wheelIter = 0;

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
    e.preventDefault();
    e.returnValue = false;  
  }

  function keydown(e) {
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }

  function touchmove(e) {
    preventDefault(e);
  }

  function wheel(e) {
    // for IE 
    //if( ie ) {
      //preventDefault(e);
    //}
  }

  function disable_scroll() {
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    // document.body.ontouchmove = touchmove;
    $('#home header').on('touchmove', touchmove);
  }

  function enable_scroll() {
    $('#home header').off('touchmove', touchmove);
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
  }

  var docElem     = window.document.documentElement,
      enabled     = true,
      scrollVal,
      isRevealed, 
      noscroll, 
      isAnimating,
      container   = el,
      trigger     = container.querySelector(options.trigger);

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }
  
  function scrollPage() {
    if (!enabled) return false;
    scrollVal = scrollY();
    
    if( noscroll && !ie ) {
      if( scrollVal < 0 ) return false;
      // keep it that way
      window.scrollTo( 0, 0 );
    }

    if( classie.has( container, 'notrans' ) ) {
      classie.remove( container, 'notrans' );
      return false;
    }

    if( isAnimating ) {
      return false;
    }
    
    if( scrollVal <= 0 && isRevealed ) {
      toggle(0);
    }
    else if( scrollVal > 0 && !isRevealed ){
      toggle(1);
    }
  }

  function toggle( reveal ) {
    isAnimating = true;
    
    if( reveal ) {
      classie.add( container, 'modify' );
    }
    else {
      noscroll = true;
      disable_scroll();
      classie.remove( container, 'modify' );
    }

    // simulating the end of the transition:
    setTimeout( function() {
      isRevealed = !isRevealed;
      isAnimating = false;
      if( reveal ) {
        noscroll = false;
        enable_scroll();
      }
    }, 1200 );
  }

  // refreshing the page...
  var pageScroll = scrollY();
  noscroll = pageScroll === 0;
  
  disable_scroll();
  
  if( pageScroll ) {
    isRevealed = true;
    classie.add( container, 'notrans' );
    classie.add( container, 'modify' );
  }

  function disable() {
    enabled = false;
    noscroll = true;
    disable_scroll();
  }

  function enable() {
    enabled = true;
    noscroll = false;
    enable_scroll();
  }

  function getContainer() {
    return container;
  }

  function getTrigger() {
    return trigger;
  }
  
  window.addEventListener('scroll', scrollPage);
  $(trigger).on('click', function() { 
    toggle('reveal'); 
  });

  return {
    disable:    disable,
    enable:     enable,
    toggle:     toggle,
    container:  getContainer,
    trigger:    getTrigger
  }
});