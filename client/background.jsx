class Background extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      dataPoints : [[0,0]]
    } 
  }
  render(){
    var dataPoints = this.state.dataPoints.map(function(tuple){
      var pointStyle = {
        color:'blue',
        position:'absolute',
        top:window.innerHeight/2-tuple[1],
        left:window.innerWidth/2-tuple[0]
      }
      return <div className='dataPoint' style={pointStyle}>here!</div>
    })
    return (
      <div>
        <DataGrid dataPoints={this.state.dataPoints}/>
        {dataPoints}
      </div>
    );
  }
}

Window.Background = Background;