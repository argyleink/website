module.exports = 
  debug:
    files: [
      {
        expand: true
        cwd:    "app/js"
        src:    ["*.js"]
        dest:   "dist/js"
      },
      {
        expand: true
        cwd:    "app/js/libs"
        src:    ["*.js"]
        dest:   "dist/js/libs"
      },
      {
        expand: true
        cwd:    "app/img"
        src:    ["*"]
        dest:   "dist/img"
      }
    ]
  images:
    files: [
      {
        expand: true
        cwd:    "app/img"
        src:    ["**/*"]
        dest:   "dist/img"
      }
    ]