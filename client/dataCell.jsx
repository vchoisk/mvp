var DataCell = (props) => {

  return (
    <tr>
      <td>{props.cord[0]}</td> 
      <td>{props.cord[1]}</td>
      <td><button onClick={props.handleDelete}>X</button></td>
    </tr>
  )
}

window.DataCell = DataCell;