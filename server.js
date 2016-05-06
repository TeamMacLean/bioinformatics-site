var app = require('./app');
var port = 3003;

app.listen(port, '0.0.0.0', function () {
    console.log('Listening on port', port);
});