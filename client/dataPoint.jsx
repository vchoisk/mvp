var DataPoint = (props) => {

  var style = {
    color:'blue',
    position:'absolute',
    top:window.innerHeight/2-props.position[1],
    left:window.innerWidth/2+props.position[0],
    backgroundColor: 'blue',
    borderRadius:'50%',
    height:'10px',
    width:'10px'
  }
  return (<div style={style}></div>) 
}

window.DataPoint = DataPoint;
