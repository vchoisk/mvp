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
        { onClick: props.handleDelete },
        "X"
      )
    )
  );
};

window.DataCell = DataCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhQ2VsbC5qc3giXSwibmFtZXMiOlsiRGF0YUNlbGwiLCJwcm9wcyIsImNvcmQiLCJoYW5kbGVEZWxldGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVzs7QUFFeEIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsWUFBTUMsSUFBTixDQUFXLENBQVg7QUFBTCxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtELFlBQU1DLElBQU4sQ0FBVyxDQUFYO0FBQUwsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxVQUFRLFNBQVNELE1BQU1FLFlBQXZCO0FBQUE7QUFBQTtBQUFKO0FBSEYsR0FERjtBQU9ELENBVEQ7O0FBV0FDLE9BQU9KLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRhdGFDZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERhdGFDZWxsID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICA8dGQ+e3Byb3BzLmNvcmRbMF19PC90ZD4gXG4gICAgICA8dGQ+e3Byb3BzLmNvcmRbMV19PC90ZD5cbiAgICAgIDx0ZD48YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZURlbGV0ZX0+WDwvYnV0dG9uPjwvdGQ+XG4gICAgPC90cj5cbiAgKVxufVxuXG53aW5kb3cuRGF0YUNlbGwgPSBEYXRhQ2VsbDsiXX0=