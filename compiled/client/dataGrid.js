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
      // this.updateTuple();
      setTimeout(0, this.updateTuple.bind(this));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhR3JpZC5qc3giXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJwcm9wcyIsInN0YXRlIiwiZGF0YURvbSIsInVwZGF0ZVR1cGxlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY291bnRlciIsImRhdGFQb2ludHMiLCJmaWx0ZXIiLCJ0dXBsZSIsIk51bWJlciIsImlzSW50ZWdlciIsIm1hcCIsImhhbmRsZVN1Ym1pdCIsInNldFRpbWVvdXQiLCJiaW5kIiwiaGFuZGxlVHdvRnVuY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFFSixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBVTtBQURDLEtBQWI7QUFHQSxVQUFLQyxXQUFMO0FBTGdCO0FBTWpCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Z0NBQ2FDLEssRUFBTTtBQUNqQkMsY0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQTZCLElBQTdCO0FBQ0EsVUFBSUMsVUFBVSxDQUFkO0FBQ0EsV0FBS04sS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEtBQUtGLEtBQUwsQ0FBV1EsVUFBWCxDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBU0MsS0FBVCxFQUFlO0FBQy9ELGVBQU9DLE9BQU9DLFNBQVAsQ0FBaUJGLE1BQU0sQ0FBTixDQUFqQixDQUFQO0FBQ0QsT0FGb0IsRUFFbEJELE1BRmtCLENBRVgsVUFBU0MsS0FBVCxFQUFlO0FBQ3ZCLGVBQU9DLE9BQU9DLFNBQVAsQ0FBaUJGLE1BQU0sQ0FBTixDQUFqQixDQUFQO0FBQ0QsT0FKb0IsRUFJbEJHLEdBSmtCLENBSWQsVUFBU0gsS0FBVCxFQUFlO0FBQ3BCSDtBQUNBLGVBQU8sb0JBQUMsUUFBRCxJQUFVLE1BQU1HLEtBQWhCLEVBQXVCLEtBQUtILE9BQTVCLEdBQVA7QUFDRCxPQVBvQixDQUFyQjtBQVFEOzs7c0NBQ2lCSCxLLEVBQU07QUFDdEIsV0FBS0osS0FBTCxDQUFXYyxZQUFYO0FBQ0E7QUFDQUMsaUJBQVcsQ0FBWCxFQUFhLEtBQUtaLFdBQUwsQ0FBaUJhLElBQWpCLENBQXNCLElBQXRCLENBQWI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7Ozs7NkJBQ1E7QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUcsZUFBS2YsS0FBTCxDQUFXQztBQU5kLFNBREY7QUFTSSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixHQVRKO0FBVUksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsUUFBdEIsR0FWSjtBQVdJO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS2UsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQWpCO0FBQUE7QUFBQTtBQVhKLE9BREY7QUFlRDs7OztFQWhFb0JFLE1BQU1DLFM7O0FBbUU3QkMsT0FBT3JCLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRhdGFHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YURvbSA6IFtdXG4gICAgfVxuICAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgfVxuICAvLyAvL3RoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGVudm9rZWQgd2hlbiB1c2VyJ3MgY3Vyc29yIGxlYXZlcyAneCcgaW5wdXQgYm94XG4gIC8vIC8vcGFzc2VkIG9udG8gdGhlIGNoaWxkcmVuIGNvbXBvbmVudHMob25lIGNlbGwgb2YgdGhlIGdyaWQpXG4gIC8vIC8vY2hlY2tzIGlmIGlucHV0IGlzIGFuIGludGVnZXIocHV0IGluIE5hTiBpZiBub3QpLCBjaGVjayBpZiBpbiByYW5nZShyZXR1cm4gZXh0cmVtIHZhbClcbiAgLy8gdXBkYXRlWEdyaWQgKGV2ZW50KXtcbiAgLy8gICB0aGlzLnByb3BzLmRhdGFQb2ludHNbdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmxlbmd0aF1bMF0gPSBldmVudC52YWw7IC8vaW5wdXQgZnJvbSB1c2VyIGluIHRoZSB0ZXh0IGJveFxuICAvLyAgIHRoaXMudXBkYXRlVHVwbGUoKTtcbiAgLy8gfVxuICAvLyAvL3Zlcnkgc2ltaWxhciB0byBhYm92ZVxuICAvLyB1cGRhdGVZR3JpZCAoZXZlbnQpe1xuICAvLyAgIHRoaXMucHJvcHMuZGF0YVBvaW50c1t0aGlzLnByb3BzLmRhdGFQb2ludHMubGVuZ3RoXVsxXSA9IGV2ZW50LnZhbDsgLy9pbnB1dCBmcm9tIHVzZXIgaW4gdGhlIHRleHQgYm94XG4gIC8vICAgdGhpcy51cGRhdGVUdXBsZSgpO1xuICAvLyB9XG4gIC8vIC8vaW5jcmVhc2UgYSBjZWxsLCBhbGxvdyB1c2VycyB0byBnaXZlIG1vcmUgaW5wdXRcbiAgLy8gLy9jaGVjayBpZiB0aGUgcHJldmlvdXMgY2VsbHMgYXJlIGZpbGxlZCBpblxuICAvLyBpbmNyZWFzZVR1cGxlIChldmVudCl7XG4gIC8vICAgdGhpcy5wcm9wcy5kYXRhUG9pbnRzLnB1c2goW10pO1xuICAvLyB9XG4gIHVwZGF0ZVR1cGxlIChldmVudCl7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaW4gdXBkYXRlJyx0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdGhpcy5zdGF0ZS5kYXRhRG9tID0gdGhpcy5wcm9wcy5kYXRhUG9pbnRzLmZpbHRlcihmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0dXBsZVswXSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHR1cGxlWzFdKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgY291bnRlcisrO1xuICAgICAgcmV0dXJuIDxEYXRhQ2VsbCBjb3JkPXt0dXBsZX0ga2V5PXtjb3VudGVyfS8+XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlVHdvRnVuY3Rpb24oZXZlbnQpe1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KCk7XG4gICAgLy8gdGhpcy51cGRhdGVUdXBsZSgpO1xuICAgIHNldFRpbWVvdXQoMCx0aGlzLnVwZGF0ZVR1cGxlLmJpbmQodGhpcykpO1xuICAgIFxuICB9XG5cbiAgLy9yZW5kZXIgYSByb3cgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGlzLnByb3BzLmRhdGFQb2ludHNcbiAgLy9lYWNoIHR1cGxlIGlzIGEgcm93IHdpdGggdHdvIGNlbGxzLCB4IHZhbHVlIGFuZCB5IHZhbHVlXG4gIC8vZmlyc3Qgcm93IGlzIGEgbGFiZWwsIHggYW5kIHlcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhVGFibGUnPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlggY29yZDwvdGQ+XG4gICAgICAgICAgICA8dGQ+WSBjb3JkPC90ZD5cbiAgICAgICAgICAgIDx0ZD5EZWxldGU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YURvbX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3hJbnB1dCcgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3lJbnB1dCcgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHdvRnVuY3Rpb24uYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkRhdGFHcmlkID0gRGF0YUdyaWQ7Il19