// var data = [];
class DataGrid extends React.Component {
  
  constructor(props){
    super(props);

  }
  // //this function should be envoked when user's cursor leaves 'x' input box
  // //passed onto the children components(one cell of the grid)
  // //checks if input is an integer(put in NaN if not), check if in range(return extrem val)
  // updateXGrid (event){
  //   this.props.dataPoints[this.props.dataPoints.length][0] = event.val; //input from user in the text box
  //   this.updateTuple();
  // }
  // //very similar to above
  // updateYGrid (event){
  //   this.props.dataPoints[this.props.dataPoints.length][1] = event.val; //input from user in the text box
  //   this.updateTuple();
  // }
  // //increase a cell, allow users to give more input
  // //check if the previous cells are filled in
  // increaseTuple (event){
  //   this.props.dataPoints.push([]);
  // }
  updateTuple (event){
    // console.log('this in update',this);
    var context = this;
    var counter = 0;
    return context.props.dataPoints.filter(function(tuple){
      return Number.isInteger(tuple[0]);
    }).filter(function(tuple){
      return Number.isInteger(tuple[1]);
    }).map(function(tuple){
      counter++;
      return <DataCell cord={tuple} key={counter} handleDelete={context.props.handleDelete.bind(null, counter)}/>
    })
  }

  handleTwoFunction(event){
    this.props.handleSubmit();
    this.updateTuple();
    //Maybe? this will allow D3 to get the data in the file
    // data = this.props.dataPoints;
    
  }

  //render a row for each element in this.props.dataPoints
  //each tuple is a row with two cells, x value and y value
  //first row is a label, x and y
  render(){
    var dataDom = this.updateTuple();
    return (
      <div className='dataTable'>
        <table>
         <tbody>
          <tr>
            <td>X coordinate</td>
            <td>Y coordinate</td>
            <td>Delete</td>
          </tr>
          {dataDom}
          <tr>
          <td><input type='text' id='xInput' /></td>
          <td><input type='text' id='yInput' /></td>
          <td><button onClick={this.handleTwoFunction.bind(this)}>Submit</button></td>
          </tr>
         </tbody>
        </table>
      </div>
    )
  }
}
// window.data = data;
window.DataGrid = DataGrid;