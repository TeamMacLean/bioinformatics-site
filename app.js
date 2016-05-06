var express = require('express');
var path = require('path');

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


router.route('/')
    .get(function (req, res) {
        res.render('index');
    });

app.use(router);


module.exports = app;
