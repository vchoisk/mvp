class DataGrid extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      dataDom : []
    }
    this.updateTuple();
  }

  //this function should be envoked when user's cursor leaves 'x' input box
  //passed onto the children components(one cell of the grid)
  //checks if input is an integer(put in NaN if not), check if in range(return extrem val)
  updateXGrid (event){
    this.props.dataPoints[this.props.dataPoints.length][0] = event.val; //input from user in the text box
    this.updateTuple();
  }
  //very similar to above
  updateYGrid (event){
    this.props.dataPoints[this.props.dataPoints.length][1] = event.val; //input from user in the text box
    this.updateTuple();
  }
  //increase a cell, allow users to give more input
  //check if the previous cells are filled in
  increaseTuple (event){
    this.props.dataPoints.push([]);
  }
  updateTuple (event){
    this.state.dataDom = this.props.dataPoints.filter(function(tuple){
      return Number.isInteger(tuple[0]);
    }).filter(function(tuple){
      return Number.isInteger(tuple[1]);
    }).map(function(tuple){
      return <DataCell cord={tuple}/>
    });
  }
  //render a row for each element in this.props.dataPoints
  //each tuple is a row with two cells, x value and y value
  //first row is a label, x and y
  render(){
    
    return (
      <div className='dataTable'>
        <table>
          <tr>
            <td>X cord</td>
            <td>Y cord</td>
            <td>Delete</td>
          </tr>
          {this.state.dataDom}
        </table>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' id='xInput' value='xValue' />
          <input type='text' id='yInput' value='yValue' />
          <button></button>
        </form>
      </div>
    )
  }
}

window.DataGrid = DataGrid;