module.exports = 
  images:
    files: [
      expand: true
      cwd:    "app/assets/images/"
      src:    ["**/*.{jpg,png,gif,jpeg,ico,svg}"]
      dest:   "<%= build_dir %>/assets/images"
    ]