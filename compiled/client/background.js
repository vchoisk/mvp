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
      var dataPointComp = this.state.dataPoints.map(function (tuple) {
        return React.createElement(DataPoint, { className: 'dataPoint', position: tuple });
      });
      return React.createElement(
        'div',
        null,
        React.createElement(DataGrid, { dataPoints: this.state.dataPoints }),
        dataPointComp
      );
    }
  }]);

  return Background;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9iYWNrZ3JvdW5kLmpzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJzdGF0ZSIsImRhdGFQb2ludHMiLCJkYXRhUG9pbnRDb21wIiwibWFwIiwidHVwbGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSjtBQUNBO0FBQ0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFhLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFEO0FBREYsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFDTztBQUNOLFVBQUlDLGdCQUFnQixLQUFLRixLQUFMLENBQVdDLFVBQVgsQ0FBc0JFLEdBQXRCLENBQTBCLFVBQVNDLEtBQVQsRUFBZTtBQUMzRCxlQUFPLG9CQUFDLFNBQUQsSUFBVyxXQUFVLFdBQXJCLEVBQWlDLFVBQVVBLEtBQTNDLEdBQVA7QUFDRCxPQUZtQixDQUFwQjtBQUdBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLFlBQVksS0FBS0osS0FBTCxDQUFXQyxVQUFqQyxHQURGO0FBRUdDO0FBRkgsT0FERjtBQU1EOzs7O0VBbkJzQkcsTUFBTUMsUzs7QUFzQi9CQyxPQUFPVCxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vbmVlZHMgdG8gaGF2ZSBkYXRhUG9pbnQgc3RhdGUgdG8gdXNlIGl0IHRvIHJlbmRlciBwb2ludHMgb24geCx5IGF4aXNcbiAgLy8gYW5kIHRvIHNhdmUgdXNlciBpbnB1dHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFQb2ludHMgOiBbWzAsMF1dXG4gICAgfSBcbiAgfVxuICByZW5kZXIoKXtcbiAgICB2YXIgZGF0YVBvaW50Q29tcCA9IHRoaXMuc3RhdGUuZGF0YVBvaW50cy5tYXAoZnVuY3Rpb24odHVwbGUpe1xuICAgICAgcmV0dXJuIDxEYXRhUG9pbnQgY2xhc3NOYW1lPSdkYXRhUG9pbnQnIHBvc2l0aW9uPXt0dXBsZX0gLz5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YUdyaWQgZGF0YVBvaW50cz17dGhpcy5zdGF0ZS5kYXRhUG9pbnRzfS8+XG4gICAgICAgIHtkYXRhUG9pbnRDb21wfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaW5kb3cuQmFja2dyb3VuZCA9IEJhY2tncm91bmQ7Il19