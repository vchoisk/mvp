class Background extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      dataPoints:
        [] 
    };
    this.getDataFromServer();
  }

  getDataFromServer (){
    var path = '/data/initial';
    this.serverRequest = $.get(path, function(result){
      console.dir(result);
      var curResult = JSON.parse(result).map(function(tuple){
        return tuple.map(function(stringVer){
          return parseInt(stringVer);
        })
      });
      this.setState({
        dataPoints:curResult
      })
    }.bind(this));
  }

  handleSubmit (event) {
    var xVal = parseInt(document.getElementById("xInput").value);
    var yVal = parseInt(document.getElementById("yInput").value);
    if(Number.isInteger(xVal) && Number.isInteger(yVal)) {
      this.setState({
        dataPoints : this.state.dataPoints.concat([[xVal, yVal]])
      }, function(){ 
        this.serverRequest=$.post('/data/updateData', {array:this.state.dataPoints});
      }.bind(this));
    }
    document.getElementById("xInput").value = '';
    document.getElementById("yInput").value = '';
  }

  handleDelete (i) {
    // console.log(i);
    var newArr=this.state.dataPoints;
    // console.log('before: ', newArr);
    newArr.splice(i-1,1);
    this.setState({
      dataPoints : newArr
    }, function(){ 
        this.serverRequest=$.post('/data/updateData', {array:this.state.dataPoints});
      }.bind(this));
    // console.log('after: ', newArr);
  }
  

  render(){
    var counter=0;
    var dataPointComp = this.state.dataPoints.map(function(tuple){
      counter++;
      return <DataPoint className='dataPoint' position={tuple} key={counter}/>
    })
    return (
      <div>
        <DataGrid dataPoints={this.state.dataPoints} handleSubmit={this.handleSubmit.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
        {dataPointComp}
      </div>
    );
  }
}

Window.Background = Background;