class CalculatorBox extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      calculatorRecords:
        [[500,300,'+'],
          [10,10,'+'],
          [50,50,'+']
        ],
      currentCalc: [] 
    };
  }

  handleButtonClicks (event) {
    console.log('handle button click');
  }
  handleEnter (event) {
    console.log('handle enter');
  } 
  render(){
    var dataPointComp = this.state.dataPoints.map(function(tuple){
      return <DataPoint className='dataPoint' position={tuple}/>
    })
    return (
      <div>
        <DisplayWindow records={this.state.calculatorRecords}/>
        <InputBox buttonClick={this.handleButtonClicks.bind(this)} handleEnter={this.handleEnter} currentCalc={this.state.currentCalc}/>
      </div>
    );
  }
}

Window.Background = Background;