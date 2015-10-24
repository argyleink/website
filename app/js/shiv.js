function addStylesheet(path) {
  document.write('<link rel="stylesheet" type="text/css" href="'+ path +'"></link>');
}

if (Device.android)
  addStylesheet('/styles/android.css')

else if (Device.ios)
  addStylesheet('/styles/ios.css')

else if (Device.ie10 || Device.ie11)
  addStylesheet('/styles/ie10.css')

else if (Device.windowsphone8) { 
  // addStylesheet('/styles/wp8.css'); 

  // stupid ms, their viewport shit is all screwed up, this hack sucks, but is the best solution as of right now
  var msViewportStyle = document.createElement("style");
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  );
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}