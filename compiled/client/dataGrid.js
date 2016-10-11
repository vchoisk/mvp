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

  //this function should be envoked when user's cursor leaves 'x' input box
  //passed onto the children components(one cell of the grid)
  //checks if input is an integer(put in NaN if not), check if in range(return extrem val)


  _createClass(DataGrid, [{
    key: 'updateXGrid',
    value: function updateXGrid(event) {
      this.props.dataPoints[row][0] = input; //input from user in the text box
    }
    //very similar to above

  }, {
    key: 'updateXGrid',
    value: function updateXGrid(event) {
      this.props.dataPoints[row][1] = input; //input from user in the text box
    }
    //increase a cell, allow users to give more input
    //check if the previous cells are filled in

  }, {
    key: 'increaseTuple',
    value: function increaseTuple(event) {
      this.props.dataPoints.push([]);
    }
    //render a row for each element in this.props.dataPoints
    //each tuple is a row with two cells, x value and y value
    //first row is a label, x and y

  }, {
    key: 'render',
    value: function render() {
      var dataDom = this.props.dataPoints.filter(function (tuple) {
        return Number.isInteger(tuple[0]);
      }).filter(function (tuple) {
        return Number.isInteger(tuple[1]);
      }).map(function (tuple) {
        return React.createElement(DataCell, { cord: tuple });
      });
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
          dataDom
        ),
        React.createElement(
          'form',
          null,
          React.createElement('input', { type: 'text', id: 'xInput', value: 'xValue' }),
          React.createElement('input', { type: 'text', id: 'yInput', value: 'yValue' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          )
        )
      );
    }
  }]);

  return DataGrid;
}(React.Component);

window.DataGrid = DataGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsImV2ZW50IiwiZGF0YVBvaW50cyIsInJvdyIsImlucHV0IiwicHVzaCIsImRhdGFEb20iLCJmaWx0ZXIiLCJ0dXBsZSIsIk51bWJlciIsImlzSW50ZWdlciIsIm1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0dBQ1ZBLEtBRFU7QUFFakI7O0FBRUQ7QUFDQTtBQUNBOzs7OztnQ0FDYUMsSyxFQUFNO0FBQ2pCLFdBQUtELEtBQUwsQ0FBV0UsVUFBWCxDQUFzQkMsR0FBdEIsRUFBMkIsQ0FBM0IsSUFBZ0NDLEtBQWhDLENBRGlCLENBQ3FCO0FBQ3ZDO0FBQ0Q7Ozs7Z0NBQ2FILEssRUFBTTtBQUNqQixXQUFLRCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JDLEdBQXRCLEVBQTJCLENBQTNCLElBQWdDQyxLQUFoQyxDQURpQixDQUNxQjtBQUN2QztBQUNEO0FBQ0E7Ozs7a0NBQ2VILEssRUFBTTtBQUNuQixXQUFLRCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JHLElBQXRCLENBQTJCLEVBQTNCO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7Ozs7NkJBQ1E7QUFDTixVQUFJQyxVQUFVLEtBQUtOLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQkssTUFBdEIsQ0FBNkIsVUFBU0MsS0FBVCxFQUFlO0FBQ3hELGVBQU9DLE9BQU9DLFNBQVAsQ0FBaUJGLE1BQU0sQ0FBTixDQUFqQixDQUFQO0FBQ0QsT0FGYSxFQUVYRCxNQUZXLENBRUosVUFBU0MsS0FBVCxFQUFlO0FBQ3ZCLGVBQU9DLE9BQU9DLFNBQVAsQ0FBaUJGLE1BQU0sQ0FBTixDQUFqQixDQUFQO0FBQ0QsT0FKYSxFQUlYRyxHQUpXLENBSVAsVUFBU0gsS0FBVCxFQUFlO0FBQ3BCLGVBQU8sb0JBQUMsUUFBRCxJQUFVLE1BQU1BLEtBQWhCLEdBQVA7QUFDRCxPQU5hLENBQWQ7QUFPQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUdGO0FBTkgsU0FERjtBQVNFO0FBQUE7QUFBQTtBQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLE9BQU0sUUFBckMsR0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLE9BQU0sUUFBckMsR0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFIRjtBQVRGLE9BREY7QUFpQkQ7Ozs7RUFqRG9CTSxNQUFNQyxTOztBQW9EN0JDLE9BQU9mLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRhdGFHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgZW52b2tlZCB3aGVuIHVzZXIncyBjdXJzb3IgbGVhdmVzICd4JyBpbnB1dCBib3hcbiAgLy9wYXNzZWQgb250byB0aGUgY2hpbGRyZW4gY29tcG9uZW50cyhvbmUgY2VsbCBvZiB0aGUgZ3JpZClcbiAgLy9jaGVja3MgaWYgaW5wdXQgaXMgYW4gaW50ZWdlcihwdXQgaW4gTmFOIGlmIG5vdCksIGNoZWNrIGlmIGluIHJhbmdlKHJldHVybiBleHRyZW0gdmFsKVxuICB1cGRhdGVYR3JpZCAoZXZlbnQpe1xuICAgIHRoaXMucHJvcHMuZGF0YVBvaW50c1tyb3ddWzBdID0gaW5wdXQgLy9pbnB1dCBmcm9tIHVzZXIgaW4gdGhlIHRleHQgYm94XG4gIH1cbiAgLy92ZXJ5IHNpbWlsYXIgdG8gYWJvdmVcbiAgdXBkYXRlWEdyaWQgKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmRhdGFQb2ludHNbcm93XVsxXSA9IGlucHV0IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICB9XG4gIC8vaW5jcmVhc2UgYSBjZWxsLCBhbGxvdyB1c2VycyB0byBnaXZlIG1vcmUgaW5wdXRcbiAgLy9jaGVjayBpZiB0aGUgcHJldmlvdXMgY2VsbHMgYXJlIGZpbGxlZCBpblxuICBpbmNyZWFzZVR1cGxlIChldmVudCl7XG4gICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzLnB1c2goW10pO1xuICB9XG4gIC8vcmVuZGVyIGEgcm93IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhpcy5wcm9wcy5kYXRhUG9pbnRzXG4gIC8vZWFjaCB0dXBsZSBpcyBhIHJvdyB3aXRoIHR3byBjZWxscywgeCB2YWx1ZSBhbmQgeSB2YWx1ZVxuICAvL2ZpcnN0IHJvdyBpcyBhIGxhYmVsLCB4IGFuZCB5XG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhRG9tID0gdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVswXSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzFdKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIDxEYXRhQ2VsbCBjb3JkPXt0dXBsZX0vPlxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YVRhYmxlJz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5YIGNvcmQ8L3RkPlxuICAgICAgICAgICAgPHRkPlkgY29yZDwvdGQ+XG4gICAgICAgICAgICA8dGQ+RGVsZXRlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtkYXRhRG9tfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3hJbnB1dCcgdmFsdWU9J3hWYWx1ZScvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0neUlucHV0JyB2YWx1ZT0neVZhbHVlJy8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkRhdGFHcmlkID0gRGF0YUdyaWQ7Il19