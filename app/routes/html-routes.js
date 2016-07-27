var path = require('path');
var Task = require("../../models/tasks.js")
module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
		
	});

	app.post('/tasks', function(request, response){
	    var t = new Task({
	        name: request.body.name1,
	        date: request.body.url1,
	        description: request.body.descr1
	    });	

	    t.save(function(err) {
	        if (err)
	           throw err;
	        else 
	           console.log('save user successfully...');
	    });
	});

}
