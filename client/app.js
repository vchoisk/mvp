console.log('reading the script');
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <p>This is where the react all begins</p>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));