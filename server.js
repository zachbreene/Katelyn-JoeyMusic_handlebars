var express = require('express');

var app = express();

var port = 1337;

//Set up the handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
//Specify “css” as a root directory from which to serve static files.
app.use(express.static('public/styles'));

//Specify “images” as a root directory from which to serve static files.
app.use(express.static('public/images'));

//Specify “js” as a root directory from which to serve static files.
app.use(express.static('public/js'));

app.use(express.static('public/data'));

//Get the route to all pages to render the templates
app.get('/', function(req, res){
    res.render('index', { title: 'Katelyn & Joey Home'});
});

app.get('/index', function(req, res){
    res.render('index', { title: 'Katelyn & Joey Home'});
});

app.get('/about', function(req, res){
    res.render('about', { title: 'About Katelyn & Joey'});
});

app.get('/experience', function(req, res){
    res.render('experience', { title: 'Katelyn & Joey Experience'});
});

app.get('/contact', function(req, res){
    res.render('contact', { title: 'Contact Us'});
});

//404 catch-all handler
app.use(function(req, res){
    res.status(404);
    res.render('404', { title: 'Page not found!' });
});

//Custom 500 Page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

//Make app listen on the port
app.listen(port, function(){
    console.log('Listening on http://localhost:' + port + ' press ctrl+c to quit.')
});