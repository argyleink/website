module.exports = 
  dev:
    files: [
      expand: true
      cwd:    "<%= app_dir %>/js"
      src:    ["*.js", "!shiv.js"]
      dest:   "<%= build_dir %>/js"
    ,
      expand: true
      cwd:    "<%= app_dir %>/js/modules"
      src:    ["*.js"]
      dest:   "<%= build_dir %>/js/modules"
    ,
      expand: true
      cwd:    "<%= app_dir %>"
      src:    "<%= bower_files.js %>"
      dest:   "<%= build_dir %>"
    ,
      expand: true
      cwd:    "<%= app_dir %>/js"
      src:    "<%= bower_files.dev_css %>"
      dest:   "<%= build_dir %>/styles"
    ,
      expand: true
      cwd:    "<%= app_dir %>/assets"
      src:    ["**/*"]
      dest:   "<%= build_dir %>/assets"
    ,
      expand: true
      cwd:    "<%= app_dir %>/"
      src:    "<%= app_files.assets %>"
      dest:   "<%= build_dir %>/"
    ,
      expand: true
      cwd:    "app/js/bower/font-awesome/fonts/"
      src:    ["*"]
      dest:   "<%= build_dir %>/styles/bower/font-awesome/fonts"
    ]

  prod:
    files: [
      expand: true
      cwd:    "<%= app_dir %>/assets/video"
      src:    ["**/*"]
      dest:   "<%= build_dir %>/assets/video"
    , 
      expand: true
      cwd:    "<%= app_dir %>/assets"
      src:    ["**/*"]
      dest:   "<%= build_dir %>/assets"
    ,
      expand: true
      cwd:    "<%= app_dir %>/"
      src:    "<%= app_files.assets %>"
      dest:   "<%= build_dir %>/"
    ,
      expand: true
      cwd:    "app/js/bower/font-awesome/fonts/"
      src:    ["*"]
      dest:   "<%= build_dir %>/fonts"
    ]