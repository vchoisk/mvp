class DisplayWindow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var recordDOM = this.props.records.map(record => {
      var stringRecord = record[0].toString()+record[2]+record[1];
      return (
        <table>
          <tr><td>{stringRecord}</td><td><span className='recordX'>X</span></td></tr>
          <tr><td> = </td><td>{JSON.parse(stringRecord)}</td></tr>
        </table>
      )
    })
    return (/*HTML Dom to render*/
      <div>
        {recordDOM}
      </div>
    );
  }
}