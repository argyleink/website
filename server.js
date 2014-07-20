var connect = require('connect');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('dist'))
  .listen(process.env.PORT || 3030);