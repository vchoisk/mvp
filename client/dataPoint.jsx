var DataPoint = (props) => {

  return (
    <tr>
      <td>{props.cord[0]}</td> 
      <td>{props.cord[1]}</td>
      <td><button>X</button></td>
    </tr>
  )
}

window.DataPoint = DataPoint;
