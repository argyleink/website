module.exports =
  prod:
    files: [
      "dist/js/lib.min.js": [
        "bower_components/jquery/dist/jquery.js"
        "bower_components/velocity/jquery.velocity.js"
        "bower_components/velocity/velocity.ui.js"
        "app/js/detect-and-fill.js"
        "app/js/libs/modernizr.custom.js"
        "app/js/libs/masonry.pkgd.min.js"
        "app/js/libs/imagesloaded.pkgd.min.js"
        "app/js/libs/snap.svg-min.js"
        "app/js/libs/svg.loader.js"
      ],
      "dist/js/app.min.js" :[
        "app/js/projects.js"
        "app/js/app.js"
        "dist/js/templates.js"
        "app/js/libs/classie.js"
        "app/js/libs/colorfinder-1.1.js"
        "app/js/libs/article.cover.js"
        "app/js/libs/page.js"
        "app/js/libs/gridScrollFx.js"
      ]
    ]

  libs:
    files:
      "dist/js/lib.min.js": [
        "bower_components/jquery/dist/jquery.js"
        "bower_components/velocity/jquery.velocity.js"
        "bower_components/velocity/velocity.ui.js"
        "app/js/libs/modernizr.custom.js"
        "app/js/libs/masonry.pkgd.min.js"
        "app/js/libs/imagesloaded.pkgd.min.js"
        "app/js/libs/snap.svg-min.js"
        "app/js/libs/svg.loader.js"
      ]