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
    var dataPointComp = this.state.dataPoints.map(function(tuple){
      return <DataPoint className='dataPoint' position={tuple} />
    })
    return (
      <div>
        <DataGrid dataPoints={this.state.dataPoints}/>
        {dataPointComp}
      </div>
    );
  }
}

Window.Background = Background;