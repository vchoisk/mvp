'use strict';

var fs = require('fs');

module.exports.getAllDataHandler = function (req, res) {
  fs.readFile(__dirname + '/data/data.js', 'utf8', function (err, data) {
    if (err) {
      console.log('There was an error in getting data initially, but get request is made successfully!!');
      throw err;
    }
    res.send(data);
  });
};

module.exports.postNewData = function (req, res) {
  var array = [];
  for (var property in req.body) {
    array.push(req.body[property]);
  }
  var stringArr = JSON.stringify(array);
  fs.writeFile(__dirname + '/data/data.js', stringArr, function (err) {
    if (err) {
      console.log('There was an error in getting data initially, but get request is made successfully!!');
      throw err;
    }
    console.log('successfully wrote to the file');
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JlcXVlc3RIYW5kbGVycy5qcyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0QWxsRGF0YUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZWFkRmlsZSIsIl9fZGlybmFtZSIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInBvc3ROZXdEYXRhIiwiYXJyYXkiLCJwcm9wZXJ0eSIsImJvZHkiLCJwdXNoIiwic3RyaW5nQXJyIiwiSlNPTiIsInN0cmluZ2lmeSIsIndyaXRlRmlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxLQUFLQyxRQUFRLElBQVIsQ0FBVDs7QUFHQUMsT0FBT0MsT0FBUCxDQUFlQyxpQkFBZixHQUFtQyxVQUFTQyxHQUFULEVBQWFDLEdBQWIsRUFBa0I7QUFDbkROLEtBQUdPLFFBQUgsQ0FBWUMsWUFBWSxlQUF4QixFQUF3QyxNQUF4QyxFQUFnRCxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBbUI7QUFDakUsUUFBSUQsR0FBSixFQUFRO0FBQ05FLGNBQVFDLEdBQVIsQ0FBWSxzRkFBWjtBQUNBLFlBQU1ILEdBQU47QUFDRDtBQUNESCxRQUFJTyxJQUFKLENBQVNILElBQVQ7QUFDRCxHQU5EO0FBT0QsQ0FSRDs7QUFVQVIsT0FBT0MsT0FBUCxDQUFlVyxXQUFmLEdBQTZCLFVBQVNULEdBQVQsRUFBY0MsR0FBZCxFQUFrQjtBQUM3QyxNQUFJUyxRQUFRLEVBQVo7QUFDQSxPQUFJLElBQUlDLFFBQVIsSUFBb0JYLElBQUlZLElBQXhCLEVBQTZCO0FBQzNCRixVQUFNRyxJQUFOLENBQVdiLElBQUlZLElBQUosQ0FBU0QsUUFBVCxDQUFYO0FBQ0Q7QUFDRCxNQUFJRyxZQUFZQyxLQUFLQyxTQUFMLENBQWVOLEtBQWYsQ0FBaEI7QUFDQWYsS0FBR3NCLFNBQUgsQ0FBYWQsWUFBWSxlQUF6QixFQUF5Q1csU0FBekMsRUFBbUQsVUFBQ1YsR0FBRCxFQUFPO0FBQ3hELFFBQUlBLEdBQUosRUFBUTtBQUNORSxjQUFRQyxHQUFSLENBQVksc0ZBQVo7QUFDQSxZQUFNSCxHQUFOO0FBQ0Q7QUFDREUsWUFBUUMsR0FBUixDQUFZLGdDQUFaO0FBQ0QsR0FORDtBQVFELENBZEQiLCJmaWxlIjoicmVxdWVzdEhhbmRsZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRBbGxEYXRhSGFuZGxlciA9IGZ1bmN0aW9uKHJlcSxyZXMpIHtcbiAgZnMucmVhZEZpbGUoX19kaXJuYW1lICsgJy9kYXRhL2RhdGEuanMnLCd1dGY4JywgZnVuY3Rpb24oZXJyLCBkYXRhKXtcbiAgICBpZiAoZXJyKXtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgaW4gZ2V0dGluZyBkYXRhIGluaXRpYWxseSwgYnV0IGdldCByZXF1ZXN0IGlzIG1hZGUgc3VjY2Vzc2Z1bGx5ISEnKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgcmVzLnNlbmQoZGF0YSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5wb3N0TmV3RGF0YSA9IGZ1bmN0aW9uKHJlcSwgcmVzKXtcbiAgdmFyIGFycmF5ID0gW107XG4gIGZvcih2YXIgcHJvcGVydHkgaW4gcmVxLmJvZHkpe1xuICAgIGFycmF5LnB1c2gocmVxLmJvZHlbcHJvcGVydHldKTtcbiAgfVxuICB2YXIgc3RyaW5nQXJyID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICBmcy53cml0ZUZpbGUoX19kaXJuYW1lICsgJy9kYXRhL2RhdGEuanMnLHN0cmluZ0FyciwoZXJyKT0+e1xuICAgIGlmIChlcnIpe1xuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBpbiBnZXR0aW5nIGRhdGEgaW5pdGlhbGx5LCBidXQgZ2V0IHJlcXVlc3QgaXMgbWFkZSBzdWNjZXNzZnVsbHkhIScpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IHdyb3RlIHRvIHRoZSBmaWxlJyk7XG4gIH0pXG4gICAgXG59XG5cbiJdfQ==