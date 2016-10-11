"use strict";

var DataCell = function DataCell(props) {

  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.cord[0]
    ),
    React.createElement(
      "td",
      null,
      props.cord[1]
    ),
    React.createElement(
      "td",
      null,
      React.createElement(
        "button",
        null,
        "X"
      )
    )
  );
};

window.DataCell = DataCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhQ2VsbC5qc3giXSwibmFtZXMiOlsiRGF0YUNlbGwiLCJwcm9wcyIsImNvcmQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVzs7QUFFeEIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsWUFBTUMsSUFBTixDQUFXLENBQVg7QUFBTCxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtELFlBQU1DLElBQU4sQ0FBVyxDQUFYO0FBQUwsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLEdBREY7QUFPRCxDQVREOztBQVdBQyxPQUFPSCxRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJkYXRhQ2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhQ2VsbCA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRkPntwcm9wcy5jb3JkWzBdfTwvdGQ+IFxuICAgICAgPHRkPntwcm9wcy5jb3JkWzFdfTwvdGQ+XG4gICAgICA8dGQ+PGJ1dHRvbj5YPC9idXR0b24+PC90ZD5cbiAgICA8L3RyPlxuICApXG59XG5cbndpbmRvdy5EYXRhQ2VsbCA9IERhdGFDZWxsOyJdfQ==