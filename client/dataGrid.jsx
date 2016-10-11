var dataGrid = (props) => {

  //this function should be envoked when user's cursor leaves 'x' input box
  //passed onto the children components(one cell of the grid)
  //checks if input is an integer(put in NaN if not), check if in range(return extrem val)
  var updateXGrid = function(event){
    this.props.dataPoints[row][0] = input //input from user in the text box
  }
  //very similar to above
  var updateXGrid = function(event){
    this.props.dataPoints[row][1] = input //input from user in the text box
  }
  //increase a cell, allow users to give more input
  //check if the previous cells are filled in
  var increaseTuple = function(event){
    this.props.dataPoints.push([]);
  }
  //render a row for each element in this.props.dataPoints
  //each tuple is a row with two cells, x value and y value
  //first row is a label, x and y
  return ()
}