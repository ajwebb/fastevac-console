var express = require('express');
var app = express();

// socket io test
var server = require('http').createServer(app);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.get('/dashboard', function(req, res) {
	res.render('index.html');
});

app.get('/login', function(req, res) {
	res.render('login.html');
});

app.get('/reports', function(req, res) {
	res.render('reporting.html');
})

app.get('/personnel', function(req, res) {
	res.render('personnel.html');
});

app.get('/groups', function(req, res) {
	res.render('groups.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});