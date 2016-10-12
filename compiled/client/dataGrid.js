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
            dataDom
          )
        ),
        React.createElement('input', { type: 'text', id: 'xInput' }),
        React.createElement('input', { type: 'text', id: 'yInput' }),
        React.createElement(
          'button',
          { onClick: this.handleTwoFunction.bind(this) },
          'Submit'
        )
      );
    }
  }]);

  return DataGrid;
}(React.Component);
// window.data = data;


window.DataGrid = DataGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsImV2ZW50IiwiY29udGV4dCIsImNvdW50ZXIiLCJkYXRhUG9pbnRzIiwiZmlsdGVyIiwidHVwbGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXAiLCJoYW5kbGVEZWxldGUiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwidXBkYXRlVHVwbGUiLCJkYXRhRG9tIiwiaGFuZGxlVHdvRnVuY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0dBQ1ZBLEtBRFU7QUFHakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztnQ0FDYUMsSyxFQUFNO0FBQ2pCO0FBQ0EsVUFBSUMsVUFBVSxJQUFkO0FBQ0EsVUFBSUMsVUFBVSxDQUFkO0FBQ0EsYUFBT0QsUUFBUUYsS0FBUixDQUFjSSxVQUFkLENBQXlCQyxNQUF6QixDQUFnQyxVQUFTQyxLQUFULEVBQWU7QUFDcEQsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUZNLEVBRUpELE1BRkksQ0FFRyxVQUFTQyxLQUFULEVBQWU7QUFDdkIsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUpNLEVBSUpHLEdBSkksQ0FJQSxVQUFTSCxLQUFULEVBQWU7QUFDcEJIO0FBQ0EsZUFBTyxvQkFBQyxRQUFELElBQVUsTUFBTUcsS0FBaEIsRUFBdUIsS0FBS0gsT0FBNUIsRUFBcUMsY0FBY0QsUUFBUUYsS0FBUixDQUFjVSxZQUFkLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxFQUFzQ1IsT0FBdEMsQ0FBbkQsR0FBUDtBQUNELE9BUE0sQ0FBUDtBQVFEOzs7c0NBRWlCRixLLEVBQU07QUFDdEIsV0FBS0QsS0FBTCxDQUFXWSxZQUFYO0FBQ0EsV0FBS0MsV0FBTDtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7Ozs7NkJBQ1E7QUFDTixVQUFJQyxVQUFVLEtBQUtELFdBQUwsRUFBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLGFBREQ7QUFNRUM7QUFORjtBQURELFNBREY7QUFXSSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixHQVhKO0FBWUksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEIsR0FaSjtBQWFJO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS0MsaUJBQUwsQ0FBdUJKLElBQXZCLENBQTRCLElBQTVCLENBQWpCO0FBQUE7QUFBQTtBQWJKLE9BREY7QUFpQkQ7Ozs7RUFuRW9CSyxNQUFNQyxTO0FBcUU3Qjs7O0FBQ0FDLE9BQU9uQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJkYXRhR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBkYXRhID0gW107XG5jbGFzcyBEYXRhR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cbiAgLy8gLy90aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBlbnZva2VkIHdoZW4gdXNlcidzIGN1cnNvciBsZWF2ZXMgJ3gnIGlucHV0IGJveFxuICAvLyAvL3Bhc3NlZCBvbnRvIHRoZSBjaGlsZHJlbiBjb21wb25lbnRzKG9uZSBjZWxsIG9mIHRoZSBncmlkKVxuICAvLyAvL2NoZWNrcyBpZiBpbnB1dCBpcyBhbiBpbnRlZ2VyKHB1dCBpbiBOYU4gaWYgbm90KSwgY2hlY2sgaWYgaW4gcmFuZ2UocmV0dXJuIGV4dHJlbSB2YWwpXG4gIC8vIHVwZGF0ZVhHcmlkIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzW3RoaXMucHJvcHMuZGF0YVBvaW50cy5sZW5ndGhdWzBdID0gZXZlbnQudmFsOyAvL2lucHV0IGZyb20gdXNlciBpbiB0aGUgdGV4dCBib3hcbiAgLy8gICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIC8vIH1cbiAgLy8gLy92ZXJ5IHNpbWlsYXIgdG8gYWJvdmVcbiAgLy8gdXBkYXRlWUdyaWQgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aF1bMV0gPSBldmVudC52YWw7IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICAvLyAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgLy8gfVxuICAvLyAvL2luY3JlYXNlIGEgY2VsbCwgYWxsb3cgdXNlcnMgdG8gZ2l2ZSBtb3JlIGlucHV0XG4gIC8vIC8vY2hlY2sgaWYgdGhlIHByZXZpb3VzIGNlbGxzIGFyZSBmaWxsZWQgaW5cbiAgLy8gaW5jcmVhc2VUdXBsZSAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50cy5wdXNoKFtdKTtcbiAgLy8gfVxuICB1cGRhdGVUdXBsZSAoZXZlbnQpe1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzIGluIHVwZGF0ZScsdGhpcyk7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gY29udGV4dC5wcm9wcy5kYXRhUG9pbnRzLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVswXSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzFdKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgY291bnRlcisrO1xuICAgICAgcmV0dXJuIDxEYXRhQ2VsbCBjb3JkPXt0dXBsZX0ga2V5PXtjb3VudGVyfSBoYW5kbGVEZWxldGU9e2NvbnRleHQucHJvcHMuaGFuZGxlRGVsZXRlLmJpbmQobnVsbCwgY291bnRlcil9Lz5cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVHdvRnVuY3Rpb24oZXZlbnQpe1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KCk7XG4gICAgdGhpcy51cGRhdGVUdXBsZSgpO1xuICAgIC8vTWF5YmU/IHRoaXMgd2lsbCBhbGxvdyBEMyB0byBnZXQgdGhlIGRhdGEgaW4gdGhlIGZpbGVcbiAgICAvLyBkYXRhID0gdGhpcy5wcm9wcy5kYXRhUG9pbnRzO1xuICAgIFxuICB9XG5cbiAgLy9yZW5kZXIgYSByb3cgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGlzLnByb3BzLmRhdGFQb2ludHNcbiAgLy9lYWNoIHR1cGxlIGlzIGEgcm93IHdpdGggdHdvIGNlbGxzLCB4IHZhbHVlIGFuZCB5IHZhbHVlXG4gIC8vZmlyc3Qgcm93IGlzIGEgbGFiZWwsIHggYW5kIHlcbiAgcmVuZGVyKCl7XG4gICAgdmFyIGRhdGFEb20gPSB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhVGFibGUnPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlggY29vcmRpbmF0ZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+WSBjb29yZGluYXRlPC90ZD5cbiAgICAgICAgICAgIDx0ZD5EZWxldGU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2RhdGFEb219XG4gICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neElucHV0JyAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neUlucHV0JyAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVUd29GdW5jdGlvbi5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy8gd2luZG93LmRhdGEgPSBkYXRhO1xud2luZG93LkRhdGFHcmlkID0gRGF0YUdyaWQ7Il19