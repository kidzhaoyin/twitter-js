var express = require ('express');
var app = express();
var morgan = require('morgan');
var swig = require('swig');

app.use(morgan('dev'));
app.set('view engine','html');

app.engine('html',swig.renderFile);
app.set('views',__dirname + './views');
swig.setDefaults({cache: false});

app.get('/', function (request, response){
	response.send('hello');

});

var server = app.listen(3000, function(){
	console.log("server listening");
});
