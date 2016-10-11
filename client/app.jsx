class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Background />
    );
  }
}
console.log('this is it ', document.body);
ReactDOM.render(<App />, document.getElementById('app'));

window.App = App;