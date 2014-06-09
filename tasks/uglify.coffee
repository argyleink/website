module.exports =
  prod:
    files: [
      {
        expand: true
        cwd:    "app/js"
        src:    ["*.js"]
        dest:   "dist/js/"
        ext:    ".js"
      }
    ]

  libs:
    files:
      "dist/js/lib.min.js": [
        "bower_components/jquery/dist/jquery.js"
        "bower_components/velocity/jquery.velocity.js"
        "app/js/libs/touche.min.js"
        "app/js/libs/modernizr.custom.js"
        "app/js/libs/masonry.pkgd.min.js"
        "app/js/libs/imagesloaded.pkgd.min.js"
        "app/js/libs/snap.svg-min.js"
        "app/js/libs/svg.loader.js"
        # "app/js/libs/classie.js"
        # "app/js/libs/colorfinder-1.1.js"
        # "app/js/libs/gridScrollFx.js"
        # "app/js/libs/*.js"
      ]