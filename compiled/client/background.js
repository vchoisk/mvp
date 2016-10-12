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
          this.serverRequest = $.post('/data/addData', { array: this.state.dataPoints });
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
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJnZXREYXRhRnJvbVNlcnZlciIsInBhdGgiLCJzZXJ2ZXJSZXF1ZXN0IiwiJCIsImdldCIsInJlc3VsdCIsImNvbnNvbGUiLCJkaXIiLCJjdXJSZXN1bHQiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJ0dXBsZSIsInN0cmluZ1ZlciIsInBhcnNlSW50Iiwic2V0U3RhdGUiLCJiaW5kIiwiZXZlbnQiLCJ4VmFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwieVZhbCIsIk51bWJlciIsImlzSW50ZWdlciIsImNvbmNhdCIsInBvc3QiLCJhcnJheSIsImkiLCJuZXdBcnIiLCJzcGxpY2UiLCJjb3VudGVyIiwiZGF0YVBvaW50Q29tcCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiV2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKO0FBQ0E7QUFDQSxzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQ0U7QUFGUyxLQUFiO0FBSUEsVUFBS0MsaUJBQUw7QUFOaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQUlDLE9BQU8sZUFBWDtBQUNBLFdBQUtDLGFBQUwsR0FBcUJDLEVBQUVDLEdBQUYsQ0FBTUgsSUFBTixFQUFZLFVBQVNJLE1BQVQsRUFBZ0I7QUFDL0NDLGdCQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxZQUFJRyxZQUFZQyxLQUFLQyxLQUFMLENBQVdMLE1BQVgsRUFBbUJNLEdBQW5CLENBQXVCLFVBQVNDLEtBQVQsRUFBZTtBQUNwRCxpQkFBT0EsTUFBTUQsR0FBTixDQUFVLFVBQVNFLFNBQVQsRUFBbUI7QUFDbEMsbUJBQU9DLFNBQVNELFNBQVQsQ0FBUDtBQUNELFdBRk0sQ0FBUDtBQUdELFNBSmUsQ0FBaEI7QUFLQSxhQUFLRSxRQUFMLENBQWM7QUFDWmhCLHNCQUFXUztBQURDLFNBQWQ7QUFHRCxPQVZnQyxDQVUvQlEsSUFWK0IsQ0FVMUIsSUFWMEIsQ0FBWixDQUFyQjtBQVdEOzs7aUNBRWFDLEssRUFBTztBQUNuQixVQUFJQyxPQUFPSixTQUFTSyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUEzQyxDQUFYO0FBQ0EsVUFBSUMsT0FBT1IsU0FBU0ssU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBM0MsQ0FBWDtBQUNBLFVBQUdFLE9BQU9DLFNBQVAsQ0FBaUJOLElBQWpCLEtBQTBCSyxPQUFPQyxTQUFQLENBQWlCRixJQUFqQixDQUE3QixFQUFxRDtBQUNuRCxhQUFLUCxRQUFMLENBQWM7QUFDWmhCLHNCQUFhLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQjBCLE1BQXRCLENBQTZCLENBQUMsQ0FBQ1AsSUFBRCxFQUFPSSxJQUFQLENBQUQsQ0FBN0I7QUFERCxTQUFkLEVBRUcsWUFBVTtBQUNYLGVBQUtwQixhQUFMLEdBQW1CQyxFQUFFdUIsSUFBRixDQUFPLGVBQVAsRUFBd0IsRUFBQ0MsT0FBTSxLQUFLN0IsS0FBTCxDQUFXQyxVQUFsQixFQUF4QixDQUFuQjtBQUNELFNBRkUsQ0FFRGlCLElBRkMsQ0FFSSxJQUZKLENBRkg7QUFLRDtBQUNERyxlQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxHQUEwQyxFQUExQztBQUNBRixlQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxHQUEwQyxFQUExQztBQUNEOzs7aUNBRWFPLEMsRUFBRztBQUNmO0FBQ0EsVUFBSUMsU0FBTyxLQUFLL0IsS0FBTCxDQUFXQyxVQUF0QjtBQUNBO0FBQ0E4QixhQUFPQyxNQUFQLENBQWNGLElBQUUsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFDQSxXQUFLYixRQUFMLENBQWM7QUFDWmhCLG9CQUFhOEI7QUFERCxPQUFkO0FBR0E7QUFDRDs7OzZCQUdPO0FBQ04sVUFBSUUsVUFBUSxDQUFaO0FBQ0EsVUFBSUMsZ0JBQWdCLEtBQUtsQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0JZLEdBQXRCLENBQTBCLFVBQVNDLEtBQVQsRUFBZTtBQUMzRG1CO0FBQ0EsZUFBTyxvQkFBQyxTQUFELElBQVcsV0FBVSxXQUFyQixFQUFpQyxVQUFVbkIsS0FBM0MsRUFBa0QsS0FBS21CLE9BQXZELEdBQVA7QUFDRCxPQUhtQixDQUFwQjtBQUlBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLFlBQVksS0FBS2pDLEtBQUwsQ0FBV0MsVUFBakMsRUFBNkMsY0FBYyxLQUFLa0MsWUFBTCxDQUFrQmpCLElBQWxCLENBQXVCLElBQXZCLENBQTNELEVBQXlGLGNBQWMsS0FBS2tCLFlBQUwsQ0FBa0JsQixJQUFsQixDQUF1QixJQUF2QixDQUF2RyxHQURGO0FBRUdnQjtBQUZILE9BREY7QUFNRDs7OztFQWpFc0JHLE1BQU1DLFM7O0FBb0UvQkMsT0FBT3pDLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9uZWVkcyB0byBoYXZlIGRhdGFQb2ludCBzdGF0ZSB0byB1c2UgaXQgdG8gcmVuZGVyIHBvaW50cyBvbiB4LHkgYXhpc1xuICAvLyBhbmQgdG8gc2F2ZSB1c2VyIGlucHV0c1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YVBvaW50czpcbiAgICAgICAgW10gXG4gICAgfTtcbiAgICB0aGlzLmdldERhdGFGcm9tU2VydmVyKCk7XG4gIH1cblxuICBnZXREYXRhRnJvbVNlcnZlciAoKXtcbiAgICB2YXIgcGF0aCA9ICcvZGF0YS9pbml0aWFsJztcbiAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSAkLmdldChwYXRoLCBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgY29uc29sZS5kaXIocmVzdWx0KTtcbiAgICAgIHZhciBjdXJSZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCkubWFwKGZ1bmN0aW9uKHR1cGxlKXtcbiAgICAgICAgcmV0dXJuIHR1cGxlLm1hcChmdW5jdGlvbihzdHJpbmdWZXIpe1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChzdHJpbmdWZXIpO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YVBvaW50czpjdXJSZXN1bHRcbiAgICAgIH0pXG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICB2YXIgeFZhbCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieElucHV0XCIpLnZhbHVlKTtcbiAgICB2YXIgeVZhbCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieUlucHV0XCIpLnZhbHVlKTtcbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKHhWYWwpICYmIE51bWJlci5pc0ludGVnZXIoeVZhbCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhUG9pbnRzIDogdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLmNvbmNhdChbW3hWYWwsIHlWYWxdXSlcbiAgICAgIH0sIGZ1bmN0aW9uKCl7IFxuICAgICAgICB0aGlzLnNlcnZlclJlcXVlc3Q9JC5wb3N0KCcvZGF0YS9hZGREYXRhJywge2FycmF5OnRoaXMuc3RhdGUuZGF0YVBvaW50c30pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4SW5wdXRcIikudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlIChpKSB7XG4gICAgLy8gY29uc29sZS5sb2coaSk7XG4gICAgdmFyIG5ld0Fycj10aGlzLnN0YXRlLmRhdGFQb2ludHM7XG4gICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZTogJywgbmV3QXJyKTtcbiAgICBuZXdBcnIuc3BsaWNlKGktMSwxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGFQb2ludHMgOiBuZXdBcnJcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXI6ICcsIG5ld0Fycik7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGNvdW50ZXI9MDtcbiAgICB2YXIgZGF0YVBvaW50Q29tcCA9IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgY291bnRlcisrO1xuICAgICAgcmV0dXJuIDxEYXRhUG9pbnQgY2xhc3NOYW1lPSdkYXRhUG9pbnQnIHBvc2l0aW9uPXt0dXBsZX0ga2V5PXtjb3VudGVyfS8+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERhdGFHcmlkIGRhdGFQb2ludHM9e3RoaXMuc3RhdGUuZGF0YVBvaW50c30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBoYW5kbGVEZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAge2RhdGFQb2ludENvbXB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpbmRvdy5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZDsiXX0=