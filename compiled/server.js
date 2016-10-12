'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var reqHandlers = require('./requestHandlers');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.use('/compiled', express.static(__dirname + '/compiled'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/data/initial', reqHandlers.getAllDataHandler);
app.post('/data/updateData', reqHandlers.postNewData);

app.listen(port);

console.log('Listening to port ', port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJyZXFIYW5kbGVycyIsImFwcCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJnZXQiLCJnZXRBbGxEYXRhSGFuZGxlciIsInBvc3QiLCJwb3N0TmV3RGF0YSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxhQUFhRCxRQUFRLGFBQVIsQ0FBakI7QUFDQSxJQUFJRSxjQUFjRixRQUFRLG1CQUFSLENBQWxCOztBQUVBLElBQUlHLE1BQU1KLFNBQVY7QUFDQSxJQUFJSyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBL0I7O0FBRUFKLElBQUlLLEdBQUosQ0FBUVAsV0FBV1EsSUFBWCxFQUFSO0FBQ0FOLElBQUlLLEdBQUosQ0FBUVAsV0FBV1MsVUFBWCxDQUFzQixFQUFDQyxVQUFTLEtBQVYsRUFBdEIsQ0FBUjs7QUFFQVIsSUFBSUssR0FBSixDQUFRVCxRQUFRYSxNQUFSLENBQWVDLFlBQVksU0FBM0IsQ0FBUjtBQUNBVixJQUFJSyxHQUFKLENBQVEsV0FBUixFQUFxQlQsUUFBUWEsTUFBUixDQUFlQyxZQUFZLFdBQTNCLENBQXJCO0FBQ0FWLElBQUlLLEdBQUosQ0FBUSxlQUFSLEVBQXlCVCxRQUFRYSxNQUFSLENBQWVDLFlBQVksZUFBM0IsQ0FBekI7O0FBRUFWLElBQUlXLEdBQUosQ0FBUSxlQUFSLEVBQXlCWixZQUFZYSxpQkFBckM7QUFDQVosSUFBSWEsSUFBSixDQUFTLGVBQVQsRUFBMEJkLFlBQVllLFdBQXRDOztBQUVBZCxJQUFJZSxNQUFKLENBQVdkLElBQVg7O0FBRUFlLFFBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ2hCLElBQWxDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xudmFyIHJlcUhhbmRsZXJzID0gcmVxdWlyZSgnLi9yZXF1ZXN0SGFuZGxlcnMnKTtcblxudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDpmYWxzZX0pKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKTtcbmFwcC51c2UoJy9jb21waWxlZCcsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvY29tcGlsZWQnKSk7XG5hcHAudXNlKCcvbm9kZV9tb2R1bGVzJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9ub2RlX21vZHVsZXMnKSk7XG5cbmFwcC5nZXQoJy9kYXRhL2luaXRpYWwnLCByZXFIYW5kbGVycy5nZXRBbGxEYXRhSGFuZGxlcik7XG5hcHAucG9zdCgnL2RhdGEvYWRkRGF0YScsIHJlcUhhbmRsZXJzLnBvc3ROZXdEYXRhKTtcblxuYXBwLmxpc3Rlbihwb3J0KTtcblxuY29uc29sZS5sb2coJ0xpc3RlbmluZyB0byBwb3J0ICcsIHBvcnQpOyJdfQ==