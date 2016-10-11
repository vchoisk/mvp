'use strict';

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
      dataPoints: [[0, 0]]
    };
    return _this;
  }

  _createClass(Background, [{
    key: 'render',
    value: function render() {
      var dataPoints = this.state.dataPoints.map(function (tuple) {
        var pointStyle = {
          color: 'blue',
          position: 'absolute',
          top: window.innerHeight / 2 - tuple[1],
          left: window.innerWidth / 2 - tuple[0]
        };
        return React.createElement(
          'div',
          { className: 'dataPoint', style: pointStyle },
          'here!'
        );
      });
      return React.createElement(
        'div',
        null,
        React.createElement(DataGrid, { dataPoints: this.state.dataPoints }),
        dataPoints
      );
    }
  }]);

  return Background;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJtYXAiLCJ0dXBsZSIsInBvaW50U3R5bGUiLCJjb2xvciIsInBvc2l0aW9uIiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJsZWZ0IiwiaW5uZXJXaWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiV2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKO0FBQ0E7QUFDQSxzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQWEsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQ7QUFERixLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUNPO0FBQ04sVUFBSUEsYUFBYSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVNDLEtBQVQsRUFBZTtBQUN4RCxZQUFJQyxhQUFhO0FBQ2ZDLGlCQUFNLE1BRFM7QUFFZkMsb0JBQVMsVUFGTTtBQUdmQyxlQUFJQyxPQUFPQyxXQUFQLEdBQW1CLENBQW5CLEdBQXFCTixNQUFNLENBQU4sQ0FIVjtBQUlmTyxnQkFBS0YsT0FBT0csVUFBUCxHQUFrQixDQUFsQixHQUFvQlIsTUFBTSxDQUFOO0FBSlYsU0FBakI7QUFNQSxlQUFPO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZixFQUEyQixPQUFPQyxVQUFsQztBQUFBO0FBQUEsU0FBUDtBQUNELE9BUmdCLENBQWpCO0FBU0EsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsWUFBWSxLQUFLSixLQUFMLENBQVdDLFVBQWpDLEdBREY7QUFFR0E7QUFGSCxPQURGO0FBTUQ7Ozs7RUF6QnNCVyxNQUFNQyxTOztBQTRCL0JDLE9BQU9oQixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vbmVlZHMgdG8gaGF2ZSBkYXRhUG9pbnQgc3RhdGUgdG8gdXNlIGl0IHRvIHJlbmRlciBwb2ludHMgb24geCx5IGF4aXNcbiAgLy8gYW5kIHRvIHNhdmUgdXNlciBpbnB1dHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFQb2ludHMgOiBbWzAsMF1dXG4gICAgfSBcbiAgfVxuICByZW5kZXIoKXtcbiAgICB2YXIgZGF0YVBvaW50cyA9IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgdmFyIHBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOidibHVlJyxcbiAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgICAgdG9wOndpbmRvdy5pbm5lckhlaWdodC8yLXR1cGxlWzFdLFxuICAgICAgICBsZWZ0OndpbmRvdy5pbm5lcldpZHRoLzItdHVwbGVbMF1cbiAgICAgIH1cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZGF0YVBvaW50JyBzdHlsZT17cG9pbnRTdHlsZX0+aGVyZSE8L2Rpdj5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YUdyaWQgZGF0YVBvaW50cz17dGhpcy5zdGF0ZS5kYXRhUG9pbnRzfS8+XG4gICAgICAgIHtkYXRhUG9pbnRzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaW5kb3cuQmFja2dyb3VuZCA9IEJhY2tncm91bmQ7Il19