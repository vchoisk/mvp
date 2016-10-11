'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataGrid = function (_React$Component) {
  _inherits(DataGrid, _React$Component);

  function DataGrid(props) {
    _classCallCheck(this, DataGrid);

    var _this = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, props));

    _this.state = {
      dataDom: []
    };
    _this.updateTuple();
    return _this;
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
      console.log('this in update', this);
      var counter = 0;
      this.state.dataDom = this.props.dataPoints.filter(function (tuple) {
        return Number.isInteger(tuple[0]);
      }).filter(function (tuple) {
        return Number.isInteger(tuple[1]);
      }).map(function (tuple) {
        counter++;
        return React.createElement(DataCell, { cord: tuple, key: counter });
      });
    }
  }, {
    key: 'handleTwoFunction',
    value: function handleTwoFunction(event) {
      this.props.handleSubmit();
      this.updateTuple();
    }

    //render a row for each element in this.props.dataPoints
    //each tuple is a row with two cells, x value and y value
    //first row is a label, x and y

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'dataTable' },
        React.createElement(
          'table',
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
          this.state.dataDom
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsInN0YXRlIiwiZGF0YURvbSIsInVwZGF0ZVR1cGxlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY291bnRlciIsImRhdGFQb2ludHMiLCJmaWx0ZXIiLCJ0dXBsZSIsIk51bWJlciIsImlzSW50ZWdlciIsIm1hcCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVR3b0Z1bmN0aW9uIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBRWhCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFVO0FBREMsS0FBYjtBQUdBLFVBQUtDLFdBQUw7QUFMZ0I7QUFNakI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztnQ0FDYUMsSyxFQUFNO0FBQ2pCQyxjQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBNkIsSUFBN0I7QUFDQSxVQUFJQyxVQUFVLENBQWQ7QUFDQSxXQUFLTixLQUFMLENBQVdDLE9BQVgsR0FBcUIsS0FBS0YsS0FBTCxDQUFXUSxVQUFYLENBQXNCQyxNQUF0QixDQUE2QixVQUFTQyxLQUFULEVBQWU7QUFDL0QsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUZvQixFQUVsQkQsTUFGa0IsQ0FFWCxVQUFTQyxLQUFULEVBQWU7QUFDdkIsZUFBT0MsT0FBT0MsU0FBUCxDQUFpQkYsTUFBTSxDQUFOLENBQWpCLENBQVA7QUFDRCxPQUpvQixFQUlsQkcsR0FKa0IsQ0FJZCxVQUFTSCxLQUFULEVBQWU7QUFDcEJIO0FBQ0EsZUFBTyxvQkFBQyxRQUFELElBQVUsTUFBTUcsS0FBaEIsRUFBdUIsS0FBS0gsT0FBNUIsR0FBUDtBQUNELE9BUG9CLENBQXJCO0FBUUQ7OztzQ0FDaUJILEssRUFBTTtBQUN0QixXQUFLSixLQUFMLENBQVdjLFlBQVg7QUFDQSxXQUFLWCxXQUFMO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOzs7OzZCQUNRO0FBQ04sYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsV0FERjtBQU1HLGVBQUtGLEtBQUwsQ0FBV0M7QUFOZCxTQURGO0FBU0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEIsR0FUSjtBQVVJLHVDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEdBVko7QUFXSTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUthLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUFqQjtBQUFBO0FBQUE7QUFYSixPQURGO0FBZUQ7Ozs7RUE5RG9CQyxNQUFNQyxTOztBQWlFN0JDLE9BQU9wQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJkYXRhR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhdGFHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFEb20gOiBbXVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIH1cbiAgLy8gLy90aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBlbnZva2VkIHdoZW4gdXNlcidzIGN1cnNvciBsZWF2ZXMgJ3gnIGlucHV0IGJveFxuICAvLyAvL3Bhc3NlZCBvbnRvIHRoZSBjaGlsZHJlbiBjb21wb25lbnRzKG9uZSBjZWxsIG9mIHRoZSBncmlkKVxuICAvLyAvL2NoZWNrcyBpZiBpbnB1dCBpcyBhbiBpbnRlZ2VyKHB1dCBpbiBOYU4gaWYgbm90KSwgY2hlY2sgaWYgaW4gcmFuZ2UocmV0dXJuIGV4dHJlbSB2YWwpXG4gIC8vIHVwZGF0ZVhHcmlkIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzW3RoaXMucHJvcHMuZGF0YVBvaW50cy5sZW5ndGhdWzBdID0gZXZlbnQudmFsOyAvL2lucHV0IGZyb20gdXNlciBpbiB0aGUgdGV4dCBib3hcbiAgLy8gICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIC8vIH1cbiAgLy8gLy92ZXJ5IHNpbWlsYXIgdG8gYWJvdmVcbiAgLy8gdXBkYXRlWUdyaWQgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aF1bMV0gPSBldmVudC52YWw7IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICAvLyAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgLy8gfVxuICAvLyAvL2luY3JlYXNlIGEgY2VsbCwgYWxsb3cgdXNlcnMgdG8gZ2l2ZSBtb3JlIGlucHV0XG4gIC8vIC8vY2hlY2sgaWYgdGhlIHByZXZpb3VzIGNlbGxzIGFyZSBmaWxsZWQgaW5cbiAgLy8gaW5jcmVhc2VUdXBsZSAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50cy5wdXNoKFtdKTtcbiAgLy8gfVxuICB1cGRhdGVUdXBsZSAoZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGluIHVwZGF0ZScsdGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHRoaXMuc3RhdGUuZGF0YURvbSA9IHRoaXMucHJvcHMuZGF0YVBvaW50cy5maWx0ZXIoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodHVwbGVbMF0pO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVsxXSk7XG4gICAgfSkubWFwKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIHJldHVybiA8RGF0YUNlbGwgY29yZD17dHVwbGV9IGtleT17Y291bnRlcn0vPlxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVR3b0Z1bmN0aW9uKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCgpO1xuICAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgfVxuXG4gIC8vcmVuZGVyIGEgcm93IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhpcy5wcm9wcy5kYXRhUG9pbnRzXG4gIC8vZWFjaCB0dXBsZSBpcyBhIHJvdyB3aXRoIHR3byBjZWxscywgeCB2YWx1ZSBhbmQgeSB2YWx1ZVxuICAvL2ZpcnN0IHJvdyBpcyBhIGxhYmVsLCB4IGFuZCB5XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YVRhYmxlJz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5YIGNvcmQ8L3RkPlxuICAgICAgICAgICAgPHRkPlkgY29yZDwvdGQ+XG4gICAgICAgICAgICA8dGQ+RGVsZXRlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFEb219XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd4SW5wdXQnIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd5SW5wdXQnIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVR3b0Z1bmN0aW9uLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5EYXRhR3JpZCA9IERhdGFHcmlkOyJdfQ==