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

  //this function should be envoked when user's cursor leaves 'x' input box
  //passed onto the children components(one cell of the grid)
  //checks if input is an integer(put in NaN if not), check if in range(return extrem val)


  _createClass(DataGrid, [{
    key: 'updateXGrid',
    value: function updateXGrid(event) {
      this.props.dataPoints[this.props.dataPoints.length - 1][0] = event.val; //input from user in the text box
      this.updateTuple();
    }
    //very similar to above

  }, {
    key: 'updateYGrid',
    value: function updateYGrid(event) {
      this.props.dataPoints[this.props.dataPoints.length - 1][1] = event.val; //input from user in the text box
      this.updateTuple();
    }
    //increase a cell, allow users to give more input
    //check if the previous cells are filled in

  }, {
    key: 'increaseTuple',
    value: function increaseTuple(event) {
      this.props.dataPoints.push([]);
    }
  }, {
    key: 'updateTuple',
    value: function updateTuple(event) {
      this.state.dataDom = this.props.dataPoints.filter(function (tuple) {
        return Number.isInteger(tuple[0]);
      }).filter(function (tuple) {
        return Number.isInteger(tuple[1]);
      }).map(function (tuple) {
        return React.createElement(DataCell, { cord: tuple });
      });
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
        React.createElement(
          'form',
          null,
          React.createElement('input', { type: 'text', id: 'xInput', value: 'xValue', onChange: this.updateXGrid.bind(this) }),
          React.createElement('input', { type: 'text', id: 'yInput', value: 'yValue', onChange: this.updateXGrid.bind(this) })
        )
      );
    }
  }]);

  return DataGrid;
}(React.Component);

window.DataGrid = DataGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsInN0YXRlIiwiZGF0YURvbSIsInVwZGF0ZVR1cGxlIiwiZXZlbnQiLCJkYXRhUG9pbnRzIiwibGVuZ3RoIiwidmFsIiwicHVzaCIsImZpbHRlciIsInR1cGxlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwibWFwIiwidXBkYXRlWEdyaWQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDVkEsS0FEVTs7QUFFaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVU7QUFEQyxLQUFiO0FBR0EsVUFBS0MsV0FBTDtBQUxnQjtBQU1qQjs7QUFFRDtBQUNBO0FBQ0E7Ozs7O2dDQUNhQyxLLEVBQU07QUFDakIsV0FBS0osS0FBTCxDQUFXSyxVQUFYLENBQXNCLEtBQUtMLEtBQUwsQ0FBV0ssVUFBWCxDQUFzQkMsTUFBdEIsR0FBNkIsQ0FBbkQsRUFBc0QsQ0FBdEQsSUFBMkRGLE1BQU1HLEdBQWpFLENBRGlCLENBQ3FEO0FBQ3RFLFdBQUtKLFdBQUw7QUFDRDtBQUNEOzs7O2dDQUNhQyxLLEVBQU07QUFDakIsV0FBS0osS0FBTCxDQUFXSyxVQUFYLENBQXNCLEtBQUtMLEtBQUwsQ0FBV0ssVUFBWCxDQUFzQkMsTUFBdEIsR0FBNkIsQ0FBbkQsRUFBc0QsQ0FBdEQsSUFBMkRGLE1BQU1HLEdBQWpFLENBRGlCLENBQ3FEO0FBQ3RFLFdBQUtKLFdBQUw7QUFDRDtBQUNEO0FBQ0E7Ozs7a0NBQ2VDLEssRUFBTTtBQUNuQixXQUFLSixLQUFMLENBQVdLLFVBQVgsQ0FBc0JHLElBQXRCLENBQTJCLEVBQTNCO0FBQ0Q7OztnQ0FDWUosSyxFQUFNO0FBQ2pCLFdBQUtILEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixLQUFLRixLQUFMLENBQVdLLFVBQVgsQ0FBc0JJLE1BQXRCLENBQTZCLFVBQVNDLEtBQVQsRUFBZTtBQUMvRCxlQUFPQyxPQUFPQyxTQUFQLENBQWlCRixNQUFNLENBQU4sQ0FBakIsQ0FBUDtBQUNELE9BRm9CLEVBRWxCRCxNQUZrQixDQUVYLFVBQVNDLEtBQVQsRUFBZTtBQUN2QixlQUFPQyxPQUFPQyxTQUFQLENBQWlCRixNQUFNLENBQU4sQ0FBakIsQ0FBUDtBQUNELE9BSm9CLEVBSWxCRyxHQUprQixDQUlkLFVBQVNILEtBQVQsRUFBZTtBQUNwQixlQUFPLG9CQUFDLFFBQUQsSUFBVSxNQUFNQSxLQUFoQixHQUFQO0FBQ0QsT0FOb0IsQ0FBckI7QUFPRDtBQUNEO0FBQ0E7QUFDQTs7Ozs2QkFDUTs7QUFFTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUcsZUFBS1QsS0FBTCxDQUFXQztBQU5kLFNBREY7QUFTRTtBQUFBO0FBQUE7QUFDRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixFQUErQixPQUFNLFFBQXJDLEVBQThDLFVBQVUsS0FBS1ksV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBeEQsR0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLE9BQU0sUUFBckMsRUFBOEMsVUFBVSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF4RDtBQUZGO0FBVEYsT0FERjtBQWdCRDs7OztFQXpEb0JDLE1BQU1DLFM7O0FBNEQ3QkMsT0FBT25CLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRhdGFHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YURvbSA6IFtdXG4gICAgfVxuICAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgfVxuXG4gIC8vdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgZW52b2tlZCB3aGVuIHVzZXIncyBjdXJzb3IgbGVhdmVzICd4JyBpbnB1dCBib3hcbiAgLy9wYXNzZWQgb250byB0aGUgY2hpbGRyZW4gY29tcG9uZW50cyhvbmUgY2VsbCBvZiB0aGUgZ3JpZClcbiAgLy9jaGVja3MgaWYgaW5wdXQgaXMgYW4gaW50ZWdlcihwdXQgaW4gTmFOIGlmIG5vdCksIGNoZWNrIGlmIGluIHJhbmdlKHJldHVybiBleHRyZW0gdmFsKVxuICB1cGRhdGVYR3JpZCAoZXZlbnQpe1xuICAgIHRoaXMucHJvcHMuZGF0YVBvaW50c1t0aGlzLnByb3BzLmRhdGFQb2ludHMubGVuZ3RoLTFdWzBdID0gZXZlbnQudmFsOyAvL2lucHV0IGZyb20gdXNlciBpbiB0aGUgdGV4dCBib3hcbiAgICB0aGlzLnVwZGF0ZVR1cGxlKCk7XG4gIH1cbiAgLy92ZXJ5IHNpbWlsYXIgdG8gYWJvdmVcbiAgdXBkYXRlWUdyaWQgKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aC0xXVsxXSA9IGV2ZW50LnZhbDsgLy9pbnB1dCBmcm9tIHVzZXIgaW4gdGhlIHRleHQgYm94XG4gICAgdGhpcy51cGRhdGVUdXBsZSgpO1xuICB9XG4gIC8vaW5jcmVhc2UgYSBjZWxsLCBhbGxvdyB1c2VycyB0byBnaXZlIG1vcmUgaW5wdXRcbiAgLy9jaGVjayBpZiB0aGUgcHJldmlvdXMgY2VsbHMgYXJlIGZpbGxlZCBpblxuICBpbmNyZWFzZVR1cGxlIChldmVudCl7XG4gICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzLnB1c2goW10pO1xuICB9XG4gIHVwZGF0ZVR1cGxlIChldmVudCl7XG4gICAgdGhpcy5zdGF0ZS5kYXRhRG9tID0gdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVswXSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzFdKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIDxEYXRhQ2VsbCBjb3JkPXt0dXBsZX0vPlxuICAgIH0pO1xuICB9XG4gIC8vcmVuZGVyIGEgcm93IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhpcy5wcm9wcy5kYXRhUG9pbnRzXG4gIC8vZWFjaCB0dXBsZSBpcyBhIHJvdyB3aXRoIHR3byBjZWxscywgeCB2YWx1ZSBhbmQgeSB2YWx1ZVxuICAvL2ZpcnN0IHJvdyBpcyBhIGxhYmVsLCB4IGFuZCB5XG4gIHJlbmRlcigpe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YVRhYmxlJz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5YIGNvcmQ8L3RkPlxuICAgICAgICAgICAgPHRkPlkgY29yZDwvdGQ+XG4gICAgICAgICAgICA8dGQ+RGVsZXRlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFEb219XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neElucHV0JyB2YWx1ZT0neFZhbHVlJyBvbkNoYW5nZT17dGhpcy51cGRhdGVYR3JpZC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd5SW5wdXQnIHZhbHVlPSd5VmFsdWUnIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVhHcmlkLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5EYXRhR3JpZCA9IERhdGFHcmlkOyJdfQ==