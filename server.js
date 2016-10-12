var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use('/compiled', express.static(__dirname + '/compiled'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// app.get('/*',function(req,res){
//   console.log('req: ', req.url);
//   res.sendFile(__dirname + req.url);
// });

app.listen(port);

console.log('Listening to port ', port);