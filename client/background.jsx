class Background extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      dataPoints = []
    } 
  }
  render(){
    return (
      <div>
      </div>
    );
  }
}
console.log('this is it ', document.body);
ReactDOM.render(<App />, document.getElementById('app'));