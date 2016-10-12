'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var data = [];
var DataGrid = function (_React$Component) {
  _inherits(DataGrid, _React$Component);

  function DataGrid(props) {
    _classCallCheck(this, DataGrid);

    return _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, props));
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


  _createClass(DataGrid, [{
    key: 'updateTuple',
    value: function updateTuple(event) {
      // console.log('this in update',this);
      var context = this;
      var counter = 0;
      return context.props.dataPoints.filter(function (tuple) {
        return Number.isInteger(tuple[0]);
      }).filter(function (tuple) {
        return Number.isInteger(tuple[1]);
      }).map(function (tuple) {
        counter++;
        return React.createElement(DataCell, { cord: tuple, key: counter, handleDelete: context.props.handleDelete.bind(null, counter) });
      });
    }
  }, {
    key: 'handleTwoFunction',
    value: function handleTwoFunction(event) {
      this.props.handleSubmit();
      this.updateTuple();
      //Maybe? this will allow D3 to get the data in the file
      // data = this.props.dataPoints;
    }

    //render a row for each element in this.props.dataPoints
    //each tuple is a row with two cells, x value and y value
    //first row is a label, x and y

  }, {
    key: 'render',
    value: function render() {
      var dataDom = this.updateTuple();
      return React.createElement(
        'div',
        { className: 'dataTable' },
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                'X coordinate'
              ),
              React.createElement(
                'td',
                null,
                'Y coordinate'
              ),
              React.createElement(
                'td',
                null,
                'Delete'
              )
            ),
            dataDom,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement('input', { type: 'text', id: 'xInput' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement('input', { type: 'text', id: 'yInput' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'button',
                  { onClick: this.handleTwoFunction.bind(this) },
                  'Submit'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DataGrid;
}(React.Component);
// window.data = data;


window.DataGrid = DataGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsImV2ZW50IiwiY29udGV4dCIsImNvdW50ZXIiLCJkYXRhUG9pbnRzIiwiZmlsdGVyIiwidHVwbGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXAiLCJoYW5kbGVEZWxldGUiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwidXBkYXRlVHVwbGUiLCJkYXRhRG9tIiwiaGFuZGxlVHdvRnVuY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0dBQ1ZBLEtBRFU7QUFHakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztnQ0FDYUMsSyxFQUFNO0FBQ2pCO0FBQ0EsVUFBSUMsVUFBVSxJQUFkO0FBQ0EsVUFBSUMsVUFBVSxDQUFkO0FBQ0EsYUFBT0QsUUFBUUYsS0FBUixDQUFjSSxVQUFkLENBQXlCQyxNQUF6QixDQUFnQyxVQUFTQyxLQUFULEVBQWU7QUFDcEQsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUZNLEVBRUpELE1BRkksQ0FFRyxVQUFTQyxLQUFULEVBQWU7QUFDdkIsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUpNLEVBSUpHLEdBSkksQ0FJQSxVQUFTSCxLQUFULEVBQWU7QUFDcEJIO0FBQ0EsZUFBTyxvQkFBQyxRQUFELElBQVUsTUFBTUcsS0FBaEIsRUFBdUIsS0FBS0gsT0FBNUIsRUFBcUMsY0FBY0QsUUFBUUYsS0FBUixDQUFjVSxZQUFkLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxFQUFzQ1IsT0FBdEMsQ0FBbkQsR0FBUDtBQUNELE9BUE0sQ0FBUDtBQVFEOzs7c0NBRWlCRixLLEVBQU07QUFDdEIsV0FBS0QsS0FBTCxDQUFXWSxZQUFYO0FBQ0EsV0FBS0MsV0FBTDtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7Ozs7NkJBQ1E7QUFDTixVQUFJQyxVQUFVLEtBQUtELFdBQUwsRUFBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLGFBREQ7QUFNRUMsbUJBTkY7QUFPQztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QjtBQUFKLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QjtBQUFKLGVBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQVEsU0FBUyxLQUFLQyxpQkFBTCxDQUF1QkosSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBakI7QUFBQTtBQUFBO0FBQUo7QUFIQTtBQVBEO0FBREQ7QUFERixPQURGO0FBbUJEOzs7O0VBckVvQkssTUFBTUMsUztBQXVFN0I7OztBQUNBQyxPQUFPbkIsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiZGF0YUdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgZGF0YSA9IFtdO1xuY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG4gIC8vIC8vdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgZW52b2tlZCB3aGVuIHVzZXIncyBjdXJzb3IgbGVhdmVzICd4JyBpbnB1dCBib3hcbiAgLy8gLy9wYXNzZWQgb250byB0aGUgY2hpbGRyZW4gY29tcG9uZW50cyhvbmUgY2VsbCBvZiB0aGUgZ3JpZClcbiAgLy8gLy9jaGVja3MgaWYgaW5wdXQgaXMgYW4gaW50ZWdlcihwdXQgaW4gTmFOIGlmIG5vdCksIGNoZWNrIGlmIGluIHJhbmdlKHJldHVybiBleHRyZW0gdmFsKVxuICAvLyB1cGRhdGVYR3JpZCAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50c1t0aGlzLnByb3BzLmRhdGFQb2ludHMubGVuZ3RoXVswXSA9IGV2ZW50LnZhbDsgLy9pbnB1dCBmcm9tIHVzZXIgaW4gdGhlIHRleHQgYm94XG4gIC8vICAgdGhpcy51cGRhdGVUdXBsZSgpO1xuICAvLyB9XG4gIC8vIC8vdmVyeSBzaW1pbGFyIHRvIGFib3ZlXG4gIC8vIHVwZGF0ZVlHcmlkIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzW3RoaXMucHJvcHMuZGF0YVBvaW50cy5sZW5ndGhdWzFdID0gZXZlbnQudmFsOyAvL2lucHV0IGZyb20gdXNlciBpbiB0aGUgdGV4dCBib3hcbiAgLy8gICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIC8vIH1cbiAgLy8gLy9pbmNyZWFzZSBhIGNlbGwsIGFsbG93IHVzZXJzIHRvIGdpdmUgbW9yZSBpbnB1dFxuICAvLyAvL2NoZWNrIGlmIHRoZSBwcmV2aW91cyBjZWxscyBhcmUgZmlsbGVkIGluXG4gIC8vIGluY3JlYXNlVHVwbGUgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHMucHVzaChbXSk7XG4gIC8vIH1cbiAgdXBkYXRlVHVwbGUgKGV2ZW50KXtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcyBpbiB1cGRhdGUnLHRoaXMpO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGNvbnRleHQucHJvcHMuZGF0YVBvaW50cy5maWx0ZXIoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodHVwbGVbMF0pO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVsxXSk7XG4gICAgfSkubWFwKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIHJldHVybiA8RGF0YUNlbGwgY29yZD17dHVwbGV9IGtleT17Y291bnRlcn0gaGFuZGxlRGVsZXRlPXtjb250ZXh0LnByb3BzLmhhbmRsZURlbGV0ZS5iaW5kKG51bGwsIGNvdW50ZXIpfS8+XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVR3b0Z1bmN0aW9uKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCgpO1xuICAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgICAvL01heWJlPyB0aGlzIHdpbGwgYWxsb3cgRDMgdG8gZ2V0IHRoZSBkYXRhIGluIHRoZSBmaWxlXG4gICAgLy8gZGF0YSA9IHRoaXMucHJvcHMuZGF0YVBvaW50cztcbiAgICBcbiAgfVxuXG4gIC8vcmVuZGVyIGEgcm93IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhpcy5wcm9wcy5kYXRhUG9pbnRzXG4gIC8vZWFjaCB0dXBsZSBpcyBhIHJvdyB3aXRoIHR3byBjZWxscywgeCB2YWx1ZSBhbmQgeSB2YWx1ZVxuICAvL2ZpcnN0IHJvdyBpcyBhIGxhYmVsLCB4IGFuZCB5XG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhRG9tID0gdGhpcy51cGRhdGVUdXBsZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YVRhYmxlJz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5YIGNvb3JkaW5hdGU8L3RkPlxuICAgICAgICAgICAgPHRkPlkgY29vcmRpbmF0ZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+RGVsZXRlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtkYXRhRG9tfVxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGlkPSd4SW5wdXQnIC8+PC90ZD5cbiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGlkPSd5SW5wdXQnIC8+PC90ZD5cbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVR3b0Z1bmN0aW9uLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbi8vIHdpbmRvdy5kYXRhID0gZGF0YTtcbndpbmRvdy5EYXRhR3JpZCA9IERhdGFHcmlkOyJdfQ==