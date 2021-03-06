var Task = require('./models/tasks.js')
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var PORT = process.env.PORT || 8080;

//Mongo
mongoose.connect('mongodb://taskboard:firstapp123@ds031845.mlab.com:31845/todotaskboard');

// Sets up the Express app to handle data parsing


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static(path.join(__dirname, '/app/public')));



//ROUTES
require('./app/routes/html-routes.js')(app);


app.listen(PORT, function(){
console.log('App listening on PORT ' + PORT);
})	                                                               