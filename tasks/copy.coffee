module.exports = debug:
  files: [
    {
      expand: true
      cwd: "app/js"
      src: ["*.js"]
      dest: "dist/js"
      ext: ".js"
    },
    {
      expand: true
      cwd: "app/js/libs"
      src: ["*.js"]
      dest: "dist/js/libs"
      ext: ".js"
    },
    {
      expand: true
      cwd: "app/img"
      src: ["*"]
      dest: "dist/img"
    }
  ]