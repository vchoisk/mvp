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
      dataPoints: []
    };
    _this.getDataFromServer();
    return _this;
  }

  _createClass(Background, [{
    key: "getDataFromServer",
    value: function getDataFromServer() {
      var path = '/data/initial';
      this.serverRequest = $.get(path, function (result) {
        console.dir(result);
        var curResult = JSON.parse(result).map(function (tuple) {
          return tuple.map(function (stringVer) {
            return parseInt(stringVer);
          });
        });
        this.setState({
          dataPoints: curResult
        });
      }.bind(this));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var xVal = parseInt(document.getElementById("xInput").value);
      var yVal = parseInt(document.getElementById("yInput").value);
      if (Number.isInteger(xVal) && Number.isInteger(yVal)) {
        this.setState({
          dataPoints: this.state.dataPoints.concat([[xVal, yVal]])
        }, function () {
          this.serverRequest = $.post('/data/updateData', { array: this.state.dataPoints });
        }.bind(this));
      }
      document.getElementById("xInput").value = '';
      document.getElementById("yInput").value = '';
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(i) {
      // console.log(i);
      var newArr = this.state.dataPoints;
      // console.log('before: ', newArr);
      newArr.splice(i - 1, 1);
      this.setState({
        dataPoints: newArr
      }, function () {
        this.serverRequest = $.post('/data/updateData', { array: this.state.dataPoints });
      }.bind(this));
      // console.log('after: ', newArr);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJnZXREYXRhRnJvbVNlcnZlciIsInBhdGgiLCJzZXJ2ZXJSZXF1ZXN0IiwiJCIsImdldCIsInJlc3VsdCIsImNvbnNvbGUiLCJkaXIiLCJjdXJSZXN1bHQiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJ0dXBsZSIsInN0cmluZ1ZlciIsInBhcnNlSW50Iiwic2V0U3RhdGUiLCJiaW5kIiwiZXZlbnQiLCJ4VmFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwieVZhbCIsIk51bWJlciIsImlzSW50ZWdlciIsImNvbmNhdCIsInBvc3QiLCJhcnJheSIsImkiLCJuZXdBcnIiLCJzcGxpY2UiLCJjb3VudGVyIiwiZGF0YVBvaW50Q29tcCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiV2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKO0FBQ0E7QUFDQSxzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQ0U7QUFGUyxLQUFiO0FBSUEsVUFBS0MsaUJBQUw7QUFOaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQUlDLE9BQU8sZUFBWDtBQUNBLFdBQUtDLGFBQUwsR0FBcUJDLEVBQUVDLEdBQUYsQ0FBTUgsSUFBTixFQUFZLFVBQVNJLE1BQVQsRUFBZ0I7QUFDL0NDLGdCQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxZQUFJRyxZQUFZQyxLQUFLQyxLQUFMLENBQVdMLE1BQVgsRUFBbUJNLEdBQW5CLENBQXVCLFVBQVNDLEtBQVQsRUFBZTtBQUNwRCxpQkFBT0EsTUFBTUQsR0FBTixDQUFVLFVBQVNFLFNBQVQsRUFBbUI7QUFDbEMsbUJBQU9DLFNBQVNELFNBQVQsQ0FBUDtBQUNELFdBRk0sQ0FBUDtBQUdELFNBSmUsQ0FBaEI7QUFLQSxhQUFLRSxRQUFMLENBQWM7QUFDWmhCLHNCQUFXUztBQURDLFNBQWQ7QUFHRCxPQVZnQyxDQVUvQlEsSUFWK0IsQ0FVMUIsSUFWMEIsQ0FBWixDQUFyQjtBQVdEOzs7aUNBRWFDLEssRUFBTztBQUNuQixVQUFJQyxPQUFPSixTQUFTSyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUEzQyxDQUFYO0FBQ0EsVUFBSUMsT0FBT1IsU0FBU0ssU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBM0MsQ0FBWDtBQUNBLFVBQUdFLE9BQU9DLFNBQVAsQ0FBaUJOLElBQWpCLEtBQTBCSyxPQUFPQyxTQUFQLENBQWlCRixJQUFqQixDQUE3QixFQUFxRDtBQUNuRCxhQUFLUCxRQUFMLENBQWM7QUFDWmhCLHNCQUFhLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQjBCLE1BQXRCLENBQTZCLENBQUMsQ0FBQ1AsSUFBRCxFQUFPSSxJQUFQLENBQUQsQ0FBN0I7QUFERCxTQUFkLEVBRUcsWUFBVTtBQUNYLGVBQUtwQixhQUFMLEdBQW1CQyxFQUFFdUIsSUFBRixDQUFPLGtCQUFQLEVBQTJCLEVBQUNDLE9BQU0sS0FBSzdCLEtBQUwsQ0FBV0MsVUFBbEIsRUFBM0IsQ0FBbkI7QUFDRCxTQUZFLENBRURpQixJQUZDLENBRUksSUFGSixDQUZIO0FBS0Q7QUFDREcsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQUYsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDRDs7O2lDQUVhTyxDLEVBQUc7QUFDZjtBQUNBLFVBQUlDLFNBQU8sS0FBSy9CLEtBQUwsQ0FBV0MsVUFBdEI7QUFDQTtBQUNBOEIsYUFBT0MsTUFBUCxDQUFjRixJQUFFLENBQWhCLEVBQWtCLENBQWxCO0FBQ0EsV0FBS2IsUUFBTCxDQUFjO0FBQ1poQixvQkFBYThCO0FBREQsT0FBZCxFQUVHLFlBQVU7QUFDVCxhQUFLM0IsYUFBTCxHQUFtQkMsRUFBRXVCLElBQUYsQ0FBTyxrQkFBUCxFQUEyQixFQUFDQyxPQUFNLEtBQUs3QixLQUFMLENBQVdDLFVBQWxCLEVBQTNCLENBQW5CO0FBQ0QsT0FGQSxDQUVDaUIsSUFGRCxDQUVNLElBRk4sQ0FGSDtBQUtBO0FBQ0Q7Ozs2QkFHTztBQUNOLFVBQUllLFVBQVEsQ0FBWjtBQUNBLFVBQUlDLGdCQUFnQixLQUFLbEMsS0FBTCxDQUFXQyxVQUFYLENBQXNCWSxHQUF0QixDQUEwQixVQUFTQyxLQUFULEVBQWU7QUFDM0RtQjtBQUNBLGVBQU8sb0JBQUMsU0FBRCxJQUFXLFdBQVUsV0FBckIsRUFBaUMsVUFBVW5CLEtBQTNDLEVBQWtELEtBQUttQixPQUF2RCxHQUFQO0FBQ0QsT0FIbUIsQ0FBcEI7QUFJQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxZQUFZLEtBQUtqQyxLQUFMLENBQVdDLFVBQWpDLEVBQTZDLGNBQWMsS0FBS2tDLFlBQUwsQ0FBa0JqQixJQUFsQixDQUF1QixJQUF2QixDQUEzRCxFQUF5RixjQUFjLEtBQUtrQixZQUFMLENBQWtCbEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkcsR0FERjtBQUVHZ0I7QUFGSCxPQURGO0FBTUQ7Ozs7RUFuRXNCRyxNQUFNQyxTOztBQXNFL0JDLE9BQU96QyxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vbmVlZHMgdG8gaGF2ZSBkYXRhUG9pbnQgc3RhdGUgdG8gdXNlIGl0IHRvIHJlbmRlciBwb2ludHMgb24geCx5IGF4aXNcbiAgLy8gYW5kIHRvIHNhdmUgdXNlciBpbnB1dHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFQb2ludHM6XG4gICAgICAgIFtdIFxuICAgIH07XG4gICAgdGhpcy5nZXREYXRhRnJvbVNlcnZlcigpO1xuICB9XG5cbiAgZ2V0RGF0YUZyb21TZXJ2ZXIgKCl7XG4gICAgdmFyIHBhdGggPSAnL2RhdGEvaW5pdGlhbCc7XG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQocGF0aCwgZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdCk7XG4gICAgICB2YXIgY3VyUmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICAgIHJldHVybiB0dXBsZS5tYXAoZnVuY3Rpb24oc3RyaW5nVmVyKXtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nVmVyKTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGFQb2ludHM6Y3VyUmVzdWx0XG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgKGV2ZW50KSB7XG4gICAgdmFyIHhWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhJbnB1dFwiKS52YWx1ZSk7XG4gICAgdmFyIHlWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSk7XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcih4VmFsKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHlWYWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YVBvaW50cyA6IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5jb25jYXQoW1t4VmFsLCB5VmFsXV0pXG4gICAgICB9LCBmdW5jdGlvbigpeyBcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0PSQucG9zdCgnL2RhdGEvdXBkYXRlRGF0YScsIHthcnJheTp0aGlzLnN0YXRlLmRhdGFQb2ludHN9KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieElucHV0XCIpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5SW5wdXRcIikudmFsdWUgPSAnJztcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZSAoaSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGkpO1xuICAgIHZhciBuZXdBcnI9dGhpcy5zdGF0ZS5kYXRhUG9pbnRzO1xuICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmU6ICcsIG5ld0Fycik7XG4gICAgbmV3QXJyLnNwbGljZShpLTEsMSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhUG9pbnRzIDogbmV3QXJyXG4gICAgfSwgZnVuY3Rpb24oKXsgXG4gICAgICAgIHRoaXMuc2VydmVyUmVxdWVzdD0kLnBvc3QoJy9kYXRhL3VwZGF0ZURhdGEnLCB7YXJyYXk6dGhpcy5zdGF0ZS5kYXRhUG9pbnRzfSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlcjogJywgbmV3QXJyKTtcbiAgfVxuICBcblxuICByZW5kZXIoKXtcbiAgICB2YXIgY291bnRlcj0wO1xuICAgIHZhciBkYXRhUG9pbnRDb21wID0gdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICBjb3VudGVyKys7XG4gICAgICByZXR1cm4gPERhdGFQb2ludCBjbGFzc05hbWU9J2RhdGFQb2ludCcgcG9zaXRpb249e3R1cGxlfSBrZXk9e2NvdW50ZXJ9Lz5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YUdyaWQgZGF0YVBvaW50cz17dGhpcy5zdGF0ZS5kYXRhUG9pbnRzfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IGhhbmRsZURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX0vPlxuICAgICAgICB7ZGF0YVBvaW50Q29tcH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2luZG93LkJhY2tncm91bmQgPSBCYWNrZ3JvdW5kOyJdfQ==