module.exports =
  dev:
    options:
      data:
        dev: true
        bower: "<%= bower_files.js %>"
        project: "<%= pkg %>"
        projects: require('../projects.json')
      pretty: true
      client: false
      basedir: 'app'

    files: "<%= app_files.jade %>"

  prod:
    options:
      data:
        dev: false
        project: "<%= pkg %>"
        projects: require('../projects.json')

    files: "<%= app_files.jade %>"