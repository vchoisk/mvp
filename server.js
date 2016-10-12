var express = require('express');
var bodyParser = require('body-parser');
var reqHandlers = require('./requestHandlers');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public'));
app.use('/compiled', express.static(__dirname + '/compiled'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/data/initial', reqHandlers.getAllDataHandler);
app.post('/data/addData', reqHandlers.postNewData);

app.listen(port);

console.log('Listening to port ', port);