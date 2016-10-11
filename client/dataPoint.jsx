var DataPoint = (props) => {

  var style = {
    color:'blue',
    position:'absolute',
    top:window.innerHeight/2-props.position[1],
    left:window.innerWidth/2-props.position[0]
  }
  return (<div style={style}>here</div>) 
}

window.DataPoint = DataPoint;
