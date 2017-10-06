// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
// set routes
//app.get('/', function(req, res) {
//   res.render('index');
//});
exports.index = function(req, res){
res.render('index', { title: 'Page title' });};  
// Set server port
app.listen(4000);
console.log('server is running');
