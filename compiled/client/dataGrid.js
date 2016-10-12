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
          { className: 'table' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsImV2ZW50IiwiY29udGV4dCIsImNvdW50ZXIiLCJkYXRhUG9pbnRzIiwiZmlsdGVyIiwidHVwbGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXAiLCJoYW5kbGVEZWxldGUiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwidXBkYXRlVHVwbGUiLCJkYXRhRG9tIiwiaGFuZGxlVHdvRnVuY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0dBQ1ZBLEtBRFU7QUFHakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztnQ0FDYUMsSyxFQUFNO0FBQ2pCO0FBQ0EsVUFBSUMsVUFBVSxJQUFkO0FBQ0EsVUFBSUMsVUFBVSxDQUFkO0FBQ0EsYUFBT0QsUUFBUUYsS0FBUixDQUFjSSxVQUFkLENBQXlCQyxNQUF6QixDQUFnQyxVQUFTQyxLQUFULEVBQWU7QUFDcEQsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUZNLEVBRUpELE1BRkksQ0FFRyxVQUFTQyxLQUFULEVBQWU7QUFDdkIsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUpNLEVBSUpHLEdBSkksQ0FJQSxVQUFTSCxLQUFULEVBQWU7QUFDcEJIO0FBQ0EsZUFBTyxvQkFBQyxRQUFELElBQVUsTUFBTUcsS0FBaEIsRUFBdUIsS0FBS0gsT0FBNUIsRUFBcUMsY0FBY0QsUUFBUUYsS0FBUixDQUFjVSxZQUFkLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxFQUFzQ1IsT0FBdEMsQ0FBbkQsR0FBUDtBQUNELE9BUE0sQ0FBUDtBQVFEOzs7c0NBRWlCRixLLEVBQU07QUFDdEIsV0FBS0QsS0FBTCxDQUFXWSxZQUFYO0FBQ0EsV0FBS0MsV0FBTDtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7Ozs7NkJBQ1E7QUFDTixVQUFJQyxVQUFVLEtBQUtELFdBQUwsRUFBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxPQUFqQjtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixhQUREO0FBTUVDLG1CQU5GO0FBT0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUksK0NBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEI7QUFBSixlQURBO0FBRUE7QUFBQTtBQUFBO0FBQUksK0NBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEI7QUFBSixlQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFRLFNBQVMsS0FBS0MsaUJBQUwsQ0FBdUJKLElBQXZCLENBQTRCLElBQTVCLENBQWpCO0FBQUE7QUFBQTtBQUFKO0FBSEE7QUFQRDtBQUREO0FBREYsT0FERjtBQW1CRDs7OztFQXJFb0JLLE1BQU1DLFM7QUF1RTdCOzs7QUFDQUMsT0FBT25CLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRhdGFHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIGRhdGEgPSBbXTtcbmNsYXNzIERhdGFHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuICAvLyAvL3RoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGVudm9rZWQgd2hlbiB1c2VyJ3MgY3Vyc29yIGxlYXZlcyAneCcgaW5wdXQgYm94XG4gIC8vIC8vcGFzc2VkIG9udG8gdGhlIGNoaWxkcmVuIGNvbXBvbmVudHMob25lIGNlbGwgb2YgdGhlIGdyaWQpXG4gIC8vIC8vY2hlY2tzIGlmIGlucHV0IGlzIGFuIGludGVnZXIocHV0IGluIE5hTiBpZiBub3QpLCBjaGVjayBpZiBpbiByYW5nZShyZXR1cm4gZXh0cmVtIHZhbClcbiAgLy8gdXBkYXRlWEdyaWQgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aF1bMF0gPSBldmVudC52YWw7IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICAvLyAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgLy8gfVxuICAvLyAvL3Zlcnkgc2ltaWxhciB0byBhYm92ZVxuICAvLyB1cGRhdGVZR3JpZCAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50c1t0aGlzLnByb3BzLmRhdGFQb2ludHMubGVuZ3RoXVsxXSA9IGV2ZW50LnZhbDsgLy9pbnB1dCBmcm9tIHVzZXIgaW4gdGhlIHRleHQgYm94XG4gIC8vICAgdGhpcy51cGRhdGVUdXBsZSgpO1xuICAvLyB9XG4gIC8vIC8vaW5jcmVhc2UgYSBjZWxsLCBhbGxvdyB1c2VycyB0byBnaXZlIG1vcmUgaW5wdXRcbiAgLy8gLy9jaGVjayBpZiB0aGUgcHJldmlvdXMgY2VsbHMgYXJlIGZpbGxlZCBpblxuICAvLyBpbmNyZWFzZVR1cGxlIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzLnB1c2goW10pO1xuICAvLyB9XG4gIHVwZGF0ZVR1cGxlIChldmVudCl7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMgaW4gdXBkYXRlJyx0aGlzKTtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiBjb250ZXh0LnByb3BzLmRhdGFQb2ludHMuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzBdKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodHVwbGVbMV0pO1xuICAgIH0pLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICBjb3VudGVyKys7XG4gICAgICByZXR1cm4gPERhdGFDZWxsIGNvcmQ9e3R1cGxlfSBrZXk9e2NvdW50ZXJ9IGhhbmRsZURlbGV0ZT17Y29udGV4dC5wcm9wcy5oYW5kbGVEZWxldGUuYmluZChudWxsLCBjb3VudGVyKX0vPlxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUd29GdW5jdGlvbihldmVudCl7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoKTtcbiAgICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gICAgLy9NYXliZT8gdGhpcyB3aWxsIGFsbG93IEQzIHRvIGdldCB0aGUgZGF0YSBpbiB0aGUgZmlsZVxuICAgIC8vIGRhdGEgPSB0aGlzLnByb3BzLmRhdGFQb2ludHM7XG4gICAgXG4gIH1cblxuICAvL3JlbmRlciBhIHJvdyBmb3IgZWFjaCBlbGVtZW50IGluIHRoaXMucHJvcHMuZGF0YVBvaW50c1xuICAvL2VhY2ggdHVwbGUgaXMgYSByb3cgd2l0aCB0d28gY2VsbHMsIHggdmFsdWUgYW5kIHkgdmFsdWVcbiAgLy9maXJzdCByb3cgaXMgYSBsYWJlbCwgeCBhbmQgeVxuICByZW5kZXIoKXtcbiAgICB2YXIgZGF0YURvbSA9IHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGFUYWJsZSc+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+WCBjb29yZGluYXRlPC90ZD5cbiAgICAgICAgICAgIDx0ZD5ZIGNvb3JkaW5hdGU8L3RkPlxuICAgICAgICAgICAgPHRkPkRlbGV0ZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7ZGF0YURvbX1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neElucHV0JyAvPjwvdGQ+XG4gICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neUlucHV0JyAvPjwvdGQ+XG4gICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVUd29GdW5jdGlvbi5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4vLyB3aW5kb3cuZGF0YSA9IGRhdGE7XG53aW5kb3cuRGF0YUdyaWQgPSBEYXRhR3JpZDsiXX0=