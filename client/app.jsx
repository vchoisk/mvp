class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <p>This is where the react all begins</p>
    );
  }
}
console.log('this is it ', document.body);
ReactDOM.render(<App />, document.getElementById('app'));