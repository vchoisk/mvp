"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_React$Component) {
  _inherits(Background, _React$Component);

  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  function Background(props) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, props));

    _this.state = {
      dataPoints: [[0, 0], [10, 10], [50, 50]]
    };
    return _this;
  }

  _createClass(Background, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var xVal = parseInt(document.getElementById("xInput").value);
      var yVal = parseInt(document.getElementById("yInput").value);
      if (Number.isInteger(xVal) && Number.isInteger(yVal)) {
        this.setState({
          dataPoints: this.state.dataPoints.concat([[xVal, yVal]])
        });
      }
      document.getElementById("xInput").value = '';
      document.getElementById("yInput").value = '';
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(event) {
      console.log(event);
      this.setState({
        dataPoints: this.state.dataPoints.splice(event.value - 1, 1)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var counter = 0;
      var dataPointComp = this.state.dataPoints.map(function (tuple) {
        counter++;
        return React.createElement(DataPoint, { className: "dataPoint", position: tuple, key: counter });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(DataGrid, { dataPoints: this.state.dataPoints, handleSubmit: this.handleSubmit.bind(this), handleDelete: this.handleDelete.bind(this) }),
        dataPointComp
      );
    }
  }]);

  return Background;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJldmVudCIsInhWYWwiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInlWYWwiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzZXRTdGF0ZSIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJjb3VudGVyIiwiZGF0YVBvaW50Q29tcCIsIm1hcCIsInR1cGxlIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZURlbGV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiV2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKO0FBQ0E7QUFDQSxzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQ0UsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFDQyxDQUFDLEVBQUQsRUFBSSxFQUFKLENBREQsRUFFQyxDQUFDLEVBQUQsRUFBSSxFQUFKLENBRkQ7QUFGUyxLQUFiO0FBRmlCO0FBUWxCOzs7O2lDQUVhQyxLLEVBQU87QUFDbkIsVUFBSUMsT0FBT0MsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBM0MsQ0FBWDtBQUNBLFVBQUlDLE9BQU9KLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQTNDLENBQVg7QUFDQSxVQUFHRSxPQUFPQyxTQUFQLENBQWlCUCxJQUFqQixLQUEwQk0sT0FBT0MsU0FBUCxDQUFpQkYsSUFBakIsQ0FBN0IsRUFBcUQ7QUFDbkQsYUFBS0csUUFBTCxDQUFjO0FBQ1pWLHNCQUFhLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQlcsTUFBdEIsQ0FBNkIsQ0FBQyxDQUFDVCxJQUFELEVBQU9LLElBQVAsQ0FBRCxDQUE3QjtBQURELFNBQWQ7QUFHRDtBQUNESCxlQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxHQUEwQyxFQUExQztBQUNBRixlQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxHQUEwQyxFQUExQztBQUNEOzs7aUNBRWFMLEssRUFBTztBQUNuQlcsY0FBUUMsR0FBUixDQUFZWixLQUFaO0FBQ0EsV0FBS1MsUUFBTCxDQUFjO0FBQ1pWLG9CQUFXLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQmMsTUFBdEIsQ0FBNkJiLE1BQU1LLEtBQU4sR0FBWSxDQUF6QyxFQUEyQyxDQUEzQztBQURDLE9BQWQ7QUFHRDs7OzZCQUVPO0FBQ04sVUFBSVMsVUFBUSxDQUFaO0FBQ0EsVUFBSUMsZ0JBQWdCLEtBQUtqQixLQUFMLENBQVdDLFVBQVgsQ0FBc0JpQixHQUF0QixDQUEwQixVQUFTQyxLQUFULEVBQWU7QUFDM0RIO0FBQ0EsZUFBTyxvQkFBQyxTQUFELElBQVcsV0FBVSxXQUFyQixFQUFpQyxVQUFVRyxLQUEzQyxFQUFrRCxLQUFLSCxPQUF2RCxHQUFQO0FBQ0QsT0FIbUIsQ0FBcEI7QUFJQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxZQUFZLEtBQUtoQixLQUFMLENBQVdDLFVBQWpDLEVBQTZDLGNBQWMsS0FBS21CLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTNELEVBQXlGLGNBQWMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkcsR0FERjtBQUVHSjtBQUZILE9BREY7QUFNRDs7OztFQTVDc0JNLE1BQU1DLFM7O0FBK0MvQkMsT0FBTzNCLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9uZWVkcyB0byBoYXZlIGRhdGFQb2ludCBzdGF0ZSB0byB1c2UgaXQgdG8gcmVuZGVyIHBvaW50cyBvbiB4LHkgYXhpc1xuICAvLyBhbmQgdG8gc2F2ZSB1c2VyIGlucHV0c1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YVBvaW50czpcbiAgICAgICAgW1swLDBdLFxuICAgICAgICAgWzEwLDEwXSxcbiAgICAgICAgIFs1MCw1MF1dIFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgKGV2ZW50KSB7XG4gICAgdmFyIHhWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhJbnB1dFwiKS52YWx1ZSk7XG4gICAgdmFyIHlWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSk7XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcih4VmFsKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHlWYWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YVBvaW50cyA6IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5jb25jYXQoW1t4VmFsLCB5VmFsXV0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4SW5wdXRcIikudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGFQb2ludHM6dGhpcy5zdGF0ZS5kYXRhUG9pbnRzLnNwbGljZShldmVudC52YWx1ZS0xLDEpXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY291bnRlcj0wO1xuICAgIHZhciBkYXRhUG9pbnRDb21wID0gdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICBjb3VudGVyKys7XG4gICAgICByZXR1cm4gPERhdGFQb2ludCBjbGFzc05hbWU9J2RhdGFQb2ludCcgcG9zaXRpb249e3R1cGxlfSBrZXk9e2NvdW50ZXJ9Lz5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YUdyaWQgZGF0YVBvaW50cz17dGhpcy5zdGF0ZS5kYXRhUG9pbnRzfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IGhhbmRsZURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX0vPlxuICAgICAgICB7ZGF0YVBvaW50Q29tcH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2luZG93LkJhY2tncm91bmQgPSBCYWNrZ3JvdW5kOyJdfQ==