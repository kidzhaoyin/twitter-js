

var express = require ('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');


app.use('/', routes(io));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.engine('html',swig.renderFile);
app.set('views',__dirname + '/views/');
swig.setDefaults({cache: false});
app.set('view engine','html');
//app.get('/', function (request, response){
//var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//response.render( 'index', {title: 'Hall of Fame', people: people} );
//});

var server = app.listen(3000);
var io = socketio.listen(server);
