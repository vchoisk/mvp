'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return React.createElement(DataCell, { cord: tuple, key: counter, handleDelete: context.props.handleDelete });
      });
    }
  }, {
    key: 'handleTwoFunction',
    value: function handleTwoFunction(event) {
      this.props.handleSubmit();
      // this.updateTuple();
      setTimeout(0, this.updateTuple.bind(this));
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
                'X cord'
              ),
              React.createElement(
                'td',
                null,
                'Y cord'
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

window.DataGrid = DataGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsImV2ZW50IiwiY29udGV4dCIsImNvdW50ZXIiLCJkYXRhUG9pbnRzIiwiZmlsdGVyIiwidHVwbGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXAiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVTdWJtaXQiLCJzZXRUaW1lb3V0IiwidXBkYXRlVHVwbGUiLCJiaW5kIiwiZGF0YURvbSIsImhhbmRsZVR3b0Z1bmN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwrR0FDVkEsS0FEVTtBQUdqQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2dDQUNhQyxLLEVBQU07QUFDakI7QUFDQSxVQUFJQyxVQUFVLElBQWQ7QUFDQSxVQUFJQyxVQUFVLENBQWQ7QUFDQSxhQUFPRCxRQUFRRixLQUFSLENBQWNJLFVBQWQsQ0FBeUJDLE1BQXpCLENBQWdDLFVBQVNDLEtBQVQsRUFBZTtBQUNwRCxlQUFPQyxPQUFPQyxTQUFQLENBQWlCRixNQUFNLENBQU4sQ0FBakIsQ0FBUDtBQUNELE9BRk0sRUFFSkQsTUFGSSxDQUVHLFVBQVNDLEtBQVQsRUFBZTtBQUN2QixlQUFPQyxPQUFPQyxTQUFQLENBQWlCRixNQUFNLENBQU4sQ0FBakIsQ0FBUDtBQUNELE9BSk0sRUFJSkcsR0FKSSxDQUlBLFVBQVNILEtBQVQsRUFBZTtBQUNwQkg7QUFDQSxlQUFPLG9CQUFDLFFBQUQsSUFBVSxNQUFNRyxLQUFoQixFQUF1QixLQUFLSCxPQUE1QixFQUFxQyxjQUFjRCxRQUFRRixLQUFSLENBQWNVLFlBQWpFLEdBQVA7QUFDRCxPQVBNLENBQVA7QUFRRDs7O3NDQUVpQlQsSyxFQUFNO0FBQ3RCLFdBQUtELEtBQUwsQ0FBV1csWUFBWDtBQUNBO0FBQ0FDLGlCQUFXLENBQVgsRUFBYSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFiO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBOzs7OzZCQUNRO0FBQ04sVUFBSUMsVUFBVSxLQUFLRixXQUFMLEVBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixhQUREO0FBTUVFO0FBTkY7QUFERCxTQURGO0FBV0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEIsR0FYSjtBQVlJLHVDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEdBWko7QUFhSTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtDLGlCQUFMLENBQXVCRixJQUF2QixDQUE0QixJQUE1QixDQUFqQjtBQUFBO0FBQUE7QUFiSixPQURGO0FBaUJEOzs7O0VBbEVvQkcsTUFBTUMsUzs7QUFxRTdCQyxPQUFPcEIsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiZGF0YUdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEYXRhR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cbiAgLy8gLy90aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBlbnZva2VkIHdoZW4gdXNlcidzIGN1cnNvciBsZWF2ZXMgJ3gnIGlucHV0IGJveFxuICAvLyAvL3Bhc3NlZCBvbnRvIHRoZSBjaGlsZHJlbiBjb21wb25lbnRzKG9uZSBjZWxsIG9mIHRoZSBncmlkKVxuICAvLyAvL2NoZWNrcyBpZiBpbnB1dCBpcyBhbiBpbnRlZ2VyKHB1dCBpbiBOYU4gaWYgbm90KSwgY2hlY2sgaWYgaW4gcmFuZ2UocmV0dXJuIGV4dHJlbSB2YWwpXG4gIC8vIHVwZGF0ZVhHcmlkIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzW3RoaXMucHJvcHMuZGF0YVBvaW50cy5sZW5ndGhdWzBdID0gZXZlbnQudmFsOyAvL2lucHV0IGZyb20gdXNlciBpbiB0aGUgdGV4dCBib3hcbiAgLy8gICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIC8vIH1cbiAgLy8gLy92ZXJ5IHNpbWlsYXIgdG8gYWJvdmVcbiAgLy8gdXBkYXRlWUdyaWQgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aF1bMV0gPSBldmVudC52YWw7IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICAvLyAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgLy8gfVxuICAvLyAvL2luY3JlYXNlIGEgY2VsbCwgYWxsb3cgdXNlcnMgdG8gZ2l2ZSBtb3JlIGlucHV0XG4gIC8vIC8vY2hlY2sgaWYgdGhlIHByZXZpb3VzIGNlbGxzIGFyZSBmaWxsZWQgaW5cbiAgLy8gaW5jcmVhc2VUdXBsZSAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50cy5wdXNoKFtdKTtcbiAgLy8gfVxuICB1cGRhdGVUdXBsZSAoZXZlbnQpe1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzIGluIHVwZGF0ZScsdGhpcyk7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gY29udGV4dC5wcm9wcy5kYXRhUG9pbnRzLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVswXSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzFdKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgY291bnRlcisrO1xuICAgICAgcmV0dXJuIDxEYXRhQ2VsbCBjb3JkPXt0dXBsZX0ga2V5PXtjb3VudGVyfSBoYW5kbGVEZWxldGU9e2NvbnRleHQucHJvcHMuaGFuZGxlRGVsZXRlfS8+XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVR3b0Z1bmN0aW9uKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCgpO1xuICAgIC8vIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgICBzZXRUaW1lb3V0KDAsdGhpcy51cGRhdGVUdXBsZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG4gIC8vcmVuZGVyIGEgcm93IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhpcy5wcm9wcy5kYXRhUG9pbnRzXG4gIC8vZWFjaCB0dXBsZSBpcyBhIHJvdyB3aXRoIHR3byBjZWxscywgeCB2YWx1ZSBhbmQgeSB2YWx1ZVxuICAvL2ZpcnN0IHJvdyBpcyBhIGxhYmVsLCB4IGFuZCB5XG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhRG9tID0gdGhpcy51cGRhdGVUdXBsZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YVRhYmxlJz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5YIGNvcmQ8L3RkPlxuICAgICAgICAgICAgPHRkPlkgY29yZDwvdGQ+XG4gICAgICAgICAgICA8dGQ+RGVsZXRlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtkYXRhRG9tfVxuICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3hJbnB1dCcgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3lJbnB1dCcgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHdvRnVuY3Rpb24uYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkRhdGFHcmlkID0gRGF0YUdyaWQ7Il19