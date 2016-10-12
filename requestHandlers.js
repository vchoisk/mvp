var fs = require('fs');


module.exports.getAllDataHandler = function(req,res) {
  fs.readFile(__dirname + '/data/data.js','utf8', function(err, data){
    if (err){
      console.log('There was an error in getting data initially, but get request is made successfully!!');
      throw err;
    }
    res.send(data);
  });
}

module.exports.postNewData = function(req, res){
  var array = [];
  for(var property in req.body){
    array.push(req.body[property]);
  }
  var stringArr = JSON.stringify(array);
  fs.writeFile(__dirname + '/data/data.js',stringArr,(err)=>{
    if (err){
      console.log('There was an error in getting data initially, but get request is made successfully!!');
      throw err;
    }
    console.log('successfully wrote to the file');
  })
    
}

