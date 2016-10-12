'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJhcHAiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiY29uc29sZSIsImxvZyIsIl9fZGlybmFtZSIsInN0YXRpYyIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLGFBQWFELFFBQVEsYUFBUixDQUFqQjs7QUFFQSxJQUFJRSxNQUFNSCxTQUFWO0FBQ0EsSUFBSUksT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQS9COztBQUVBSixJQUFJSyxHQUFKLENBQVFOLFdBQVdPLElBQVgsRUFBUjtBQUNBTixJQUFJSyxHQUFKLENBQVFOLFdBQVdRLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBUyxLQUFWLEVBQXRCLENBQVI7QUFDQUMsUUFBUUMsR0FBUixDQUFZQyxTQUFaO0FBQ0FYLElBQUlLLEdBQUosQ0FBUVIsUUFBUWUsTUFBUixDQUFlRCxZQUFZLFNBQTNCLENBQVI7QUFDQVgsSUFBSUssR0FBSixDQUFRLFdBQVIsRUFBcUJSLFFBQVFlLE1BQVIsQ0FBZUQsWUFBWSxXQUEzQixDQUFyQjtBQUNBWCxJQUFJSyxHQUFKLENBQVEsZUFBUixFQUF5QlIsUUFBUWUsTUFBUixDQUFlRCxZQUFZLGVBQTNCLENBQXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBWCxJQUFJYSxNQUFKLENBQVdaLElBQVg7O0FBRUFRLFFBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ1QsSUFBbEMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6ZmFsc2V9KSk7XG5jb25zb2xlLmxvZyhfX2Rpcm5hbWUpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKTtcbmFwcC51c2UoJy9jb21waWxlZCcsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvY29tcGlsZWQnKSk7XG5hcHAudXNlKCcvbm9kZV9tb2R1bGVzJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9ub2RlX21vZHVsZXMnKSk7XG5cbi8vIGFwcC5nZXQoJy8qJyxmdW5jdGlvbihyZXEscmVzKXtcbi8vICAgY29uc29sZS5sb2coJ3JlcTogJywgcmVxLnVybCk7XG4vLyAgIHJlcy5zZW5kRmlsZShfX2Rpcm5hbWUgKyByZXEudXJsKTtcbi8vIH0pO1xuXG5hcHAubGlzdGVuKHBvcnQpO1xuXG5jb25zb2xlLmxvZygnTGlzdGVuaW5nIHRvIHBvcnQgJywgcG9ydCk7Il19