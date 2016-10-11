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
    key: "render",
    value: function render() {
      var dataPointComp = this.state.dataPoints.map(function (tuple) {
        return React.createElement(DataPoint, { className: "dataPoint", position: tuple });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(DataGrid, { dataPoints: this.state.dataPoints, handleSubmit: this.handleSubmit.bind(this) }),
        dataPointComp
      );
    }
  }]);

  return Background;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJldmVudCIsInhWYWwiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInlWYWwiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzZXRTdGF0ZSIsImNvbmNhdCIsImRhdGFQb2ludENvbXAiLCJtYXAiLCJ0dXBsZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSjtBQUNBO0FBQ0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUNFLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQ0MsQ0FBQyxFQUFELEVBQUksRUFBSixDQURELEVBRUMsQ0FBQyxFQUFELEVBQUksRUFBSixDQUZEO0FBRlMsS0FBYjtBQUZpQjtBQVFsQjs7OztpQ0FFYUMsSyxFQUFPO0FBQ25CLFVBQUlDLE9BQU9DLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQTNDLENBQVg7QUFDQSxVQUFJQyxPQUFPSixTQUFTQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUEzQyxDQUFYO0FBQ0EsVUFBR0UsT0FBT0MsU0FBUCxDQUFpQlAsSUFBakIsS0FBMEJNLE9BQU9DLFNBQVAsQ0FBaUJGLElBQWpCLENBQTdCLEVBQXFEO0FBQ25ELGFBQUtHLFFBQUwsQ0FBYztBQUNaVixzQkFBYSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JXLE1BQXRCLENBQTZCLENBQUMsQ0FBQ1QsSUFBRCxFQUFPSyxJQUFQLENBQUQsQ0FBN0I7QUFERCxTQUFkO0FBR0Q7QUFDREgsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQUYsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDRDs7OzZCQUNPO0FBQ04sVUFBSU0sZ0JBQWdCLEtBQUtiLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQmEsR0FBdEIsQ0FBMEIsVUFBU0MsS0FBVCxFQUFlO0FBQzNELGVBQU8sb0JBQUMsU0FBRCxJQUFXLFdBQVUsV0FBckIsRUFBaUMsVUFBVUEsS0FBM0MsR0FBUDtBQUNELE9BRm1CLENBQXBCO0FBR0EsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsWUFBWSxLQUFLZixLQUFMLENBQVdDLFVBQWpDLEVBQTZDLGNBQWMsS0FBS2UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBM0QsR0FERjtBQUVHSjtBQUZILE9BREY7QUFNRDs7OztFQWxDc0JLLE1BQU1DLFM7O0FBcUMvQkMsT0FBT3RCLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9uZWVkcyB0byBoYXZlIGRhdGFQb2ludCBzdGF0ZSB0byB1c2UgaXQgdG8gcmVuZGVyIHBvaW50cyBvbiB4LHkgYXhpc1xuICAvLyBhbmQgdG8gc2F2ZSB1c2VyIGlucHV0c1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YVBvaW50czpcbiAgICAgICAgW1swLDBdLFxuICAgICAgICAgWzEwLDEwXSxcbiAgICAgICAgIFs1MCw1MF1dIFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgKGV2ZW50KSB7XG4gICAgdmFyIHhWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhJbnB1dFwiKS52YWx1ZSk7XG4gICAgdmFyIHlWYWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSk7XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcih4VmFsKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHlWYWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YVBvaW50cyA6IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5jb25jYXQoW1t4VmFsLCB5VmFsXV0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4SW5wdXRcIikudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlJbnB1dFwiKS52YWx1ZSA9ICcnO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhUG9pbnRDb21wID0gdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gPERhdGFQb2ludCBjbGFzc05hbWU9J2RhdGFQb2ludCcgcG9zaXRpb249e3R1cGxlfS8+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERhdGFHcmlkIGRhdGFQb2ludHM9e3RoaXMuc3RhdGUuZGF0YVBvaW50c30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHtkYXRhUG9pbnRDb21wfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaW5kb3cuQmFja2dyb3VuZCA9IEJhY2tncm91bmQ7Il19