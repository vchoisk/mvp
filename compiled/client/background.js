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
    value: function handleDelete(i) {
      console.log(i);
      var newArr = this.state.dataPoints;
      console.log('before: ', newArr);
      newArr.splice(i - 1, 1);
      this.setState({
        dataPoints: newArr
      });
      console.log('after: ', newArr);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJldmVudCIsInhWYWwiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInlWYWwiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzZXRTdGF0ZSIsImNvbmNhdCIsImkiLCJjb25zb2xlIiwibG9nIiwibmV3QXJyIiwic3BsaWNlIiwiY291bnRlciIsImRhdGFQb2ludENvbXAiLCJtYXAiLCJ0dXBsZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVEZWxldGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSjtBQUNBO0FBQ0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUNFLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQ0MsQ0FBQyxFQUFELEVBQUksRUFBSixDQURELEVBRUMsQ0FBQyxFQUFELEVBQUksRUFBSixDQUZEO0FBRlMsS0FBYjtBQUZpQjtBQVFsQjs7OztpQ0FFYUMsSyxFQUFPO0FBQ25CLFVBQUlDLE9BQU9DLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQTNDLENBQVg7QUFDQSxVQUFJQyxPQUFPSixTQUFTQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUEzQyxDQUFYO0FBQ0EsVUFBR0UsT0FBT0MsU0FBUCxDQUFpQlAsSUFBakIsS0FBMEJNLE9BQU9DLFNBQVAsQ0FBaUJGLElBQWpCLENBQTdCLEVBQXFEO0FBQ25ELGFBQUtHLFFBQUwsQ0FBYztBQUNaVixzQkFBYSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JXLE1BQXRCLENBQTZCLENBQUMsQ0FBQ1QsSUFBRCxFQUFPSyxJQUFQLENBQUQsQ0FBN0I7QUFERCxTQUFkO0FBR0Q7QUFDREgsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQUYsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDRDs7O2lDQUVhTSxDLEVBQUc7QUFDZkMsY0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsVUFBSUcsU0FBTyxLQUFLaEIsS0FBTCxDQUFXQyxVQUF0QjtBQUNBYSxjQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkMsTUFBeEI7QUFDQUEsYUFBT0MsTUFBUCxDQUFjSixJQUFFLENBQWhCLEVBQWtCLENBQWxCO0FBQ0EsV0FBS0YsUUFBTCxDQUFjO0FBQ1pWLG9CQUFhZTtBQURELE9BQWQ7QUFHQUYsY0FBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJDLE1BQXZCO0FBQ0Q7Ozs2QkFFTztBQUNOLFVBQUlFLFVBQVEsQ0FBWjtBQUNBLFVBQUlDLGdCQUFnQixLQUFLbkIsS0FBTCxDQUFXQyxVQUFYLENBQXNCbUIsR0FBdEIsQ0FBMEIsVUFBU0MsS0FBVCxFQUFlO0FBQzNESDtBQUNBLGVBQU8sb0JBQUMsU0FBRCxJQUFXLFdBQVUsV0FBckIsRUFBaUMsVUFBVUcsS0FBM0MsRUFBa0QsS0FBS0gsT0FBdkQsR0FBUDtBQUNELE9BSG1CLENBQXBCO0FBSUEsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsWUFBWSxLQUFLbEIsS0FBTCxDQUFXQyxVQUFqQyxFQUE2QyxjQUFjLEtBQUtxQixZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUEzRCxFQUF5RixjQUFjLEtBQUtDLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQXZHLEdBREY7QUFFR0o7QUFGSCxPQURGO0FBTUQ7Ozs7RUFoRHNCTSxNQUFNQyxTOztBQW1EL0JDLE9BQU83QixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vbmVlZHMgdG8gaGF2ZSBkYXRhUG9pbnQgc3RhdGUgdG8gdXNlIGl0IHRvIHJlbmRlciBwb2ludHMgb24geCx5IGF4aXNcbiAgLy8gYW5kIHRvIHNhdmUgdXNlciBpbnB1dHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFQb2ludHM6XG4gICAgICAgIFtbMCwwXSxcbiAgICAgICAgIFsxMCwxMF0sXG4gICAgICAgICBbNTAsNTBdXSBcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3VibWl0IChldmVudCkge1xuICAgIHZhciB4VmFsID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4SW5wdXRcIikudmFsdWUpO1xuICAgIHZhciB5VmFsID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5SW5wdXRcIikudmFsdWUpO1xuICAgIGlmKE51bWJlci5pc0ludGVnZXIoeFZhbCkgJiYgTnVtYmVyLmlzSW50ZWdlcih5VmFsKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGFQb2ludHMgOiB0aGlzLnN0YXRlLmRhdGFQb2ludHMuY29uY2F0KFtbeFZhbCwgeVZhbF1dKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieElucHV0XCIpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5SW5wdXRcIikudmFsdWUgPSAnJztcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZSAoaSkge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIHZhciBuZXdBcnI9dGhpcy5zdGF0ZS5kYXRhUG9pbnRzO1xuICAgIGNvbnNvbGUubG9nKCdiZWZvcmU6ICcsIG5ld0Fycik7XG4gICAgbmV3QXJyLnNwbGljZShpLTEsMSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhUG9pbnRzIDogbmV3QXJyXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2FmdGVyOiAnLCBuZXdBcnIpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGNvdW50ZXI9MDtcbiAgICB2YXIgZGF0YVBvaW50Q29tcCA9IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgY291bnRlcisrO1xuICAgICAgcmV0dXJuIDxEYXRhUG9pbnQgY2xhc3NOYW1lPSdkYXRhUG9pbnQnIHBvc2l0aW9uPXt0dXBsZX0ga2V5PXtjb3VudGVyfS8+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERhdGFHcmlkIGRhdGFQb2ludHM9e3RoaXMuc3RhdGUuZGF0YVBvaW50c30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBoYW5kbGVEZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAge2RhdGFQb2ludENvbXB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpbmRvdy5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZDsiXX0=