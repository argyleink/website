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
      { 
        image:  'http://placebox.es/600/400',
        title:  'Lively',
        detail: 'Cross platform responsive mobile first web app with native capabilities',
        url:    'lively.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'Next Issue Media',
        detail: 'ActionScript 3 game built for iOS, Android, and BlackBerry phones and tablets',
        url:    'dieantsdie.html',
        type:   'project'
      },
      { 
        image:  'github-alt',
        title:  'Github',
        url:    'https://github.com/argyleink',
        type:   'social'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'Clear',
        detail: 'A Javascript PhoneGap HTML5 recreation backed by Nodejs & Mongo',
        url:    'clear.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/400/500',
        title:  'Uber Cute Baby Animals',
        detail: 'An app so cute, no one can withstand it.',
        url:    'ubercute.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/400/700',
        title:  'Leap Motion',
        detail: 'Fun little projects',
        url:    'leap.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/700/400',
        title:  'Die Ants Die!',
        detail: 'ActionScript 3 game built for iOS, Android, and BlackBerry phones and tablets',
        url:    'dieantsdie.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'HTML/Javascript Lessons',
        detail: 'I have open sourced a decent amount of work to help people learn and build better web sites.',
        url:    'lessons.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'iCookbook',
        detail: 'Recipe application for iOS, Android, Kindle, Win8, and more',
        url:    'icookbook.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/400/600',
        title:  'Conde Nast:GQ',
        detail: 'Windows 8 WinJS Responsive Native App',
        url:    'condenast.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'Market Leader',
        detail: 'Real Estate Mobile Web App',
        url:    'marketleader.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'Syntax Bros',
        detail: 'ActionScript 3 game built for the developer',
        url:    'syntaxbros.html',
        type:   'project'
      },
      { 
        image:  'http://placebox.es/600/400',
        title:  'Visqueen',
        detail: 'Awesome Seattle band.',
        url:    'visqueen.html',
        type:   'project'
      }
    ]
  };

  jade.render($('#grid')[0], 'grid', gridData);

  // new GridScrollFx(document.getElementById('grid'), {
  //   viewportFactor : 0.4
  // });

});