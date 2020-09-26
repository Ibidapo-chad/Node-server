var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
var fortune = require('./libs/fortune');
var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Express started on localhost:' + app.get('port') + '; press CTRL + C to terminate.');
})
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' &&  // Needs Attention
    req.query.test === '1';
    next();
});
// **Form-handling
app.use(require('body-parser')());                              // Needs Attention
app.get('/newsletter', function(req, res){
    // we will learn about CSRF later...for now, we just
    // provide a dummy value
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.post('/process', function(req, res){
    if(req.xhr || req.accepts('json,html')==='json'){
    // if there were an error, we would send { error: 'error description' }
    res.send({ success: true });
    } else {
    // if there were an error, we would redirect to an error page
    res.redirect(303, '/thank-you');
    }
});
// **Route Pages
app.get('/', function(req, res){
    res.render('home');
    });
app.get('/about', function(req, res){
    res.render('about', {fortune : fortune.getFortune(), pageTestScript: '/qa/tests-about.js'});
    });
// custom 404 page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});




    

