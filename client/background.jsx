class Background extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      dataPoints:
        [[0,0],
         [10,10],
         [50,50]] 
    };
  }

  handleSubmit (event) {
    var xVal = parseInt(document.getElementById("xInput").value);
    var yVal = parseInt(document.getElementById("yInput").value);
    if(Number.isInteger(xVal) && Number.isInteger(yVal)) {
      this.setState({
        dataPoints : this.state.dataPoints.concat([[xVal, yVal]])
      });
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
    });
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