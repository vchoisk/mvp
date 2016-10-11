class Background extends React.Component {
  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  constructor(props) {
    super(props);
    this.state = {
      dataPoints = []
    } 
  }
  //MAJOR PROBLEM HERE
  //how do I get access to data in state?
  render(){
    return (
      <p>This is where the react all begins</p>
    );
  }
}
console.log('this is it ', document.body);
ReactDOM.render(<App />, document.getElementById('app'));