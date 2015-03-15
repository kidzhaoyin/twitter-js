var express = require ('express');
var app = express();
var morgan = require('morgan')
app.use(morgan('dev'));

app.get('/', function (request, response){
	response.send('hello');

});

var server = app.listen(3000, function(){
	console.log("server listening");
});
