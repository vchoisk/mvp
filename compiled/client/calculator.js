'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorBox = function (_React$Component) {
  _inherits(CalculatorBox, _React$Component);

  //needs to have dataPoint state to use it to render points on x,y axis
  // and to save user inputs
  function CalculatorBox(props) {
    _classCallCheck(this, CalculatorBox);

    var _this = _possibleConstructorReturn(this, (CalculatorBox.__proto__ || Object.getPrototypeOf(CalculatorBox)).call(this, props));

    _this.state = {
      calculatorRecords: [[500, 300, '+'], [10, 10, '+'], [50, 50, '+']],
      currentCalc: []
    };
    return _this;
  }

  _createClass(CalculatorBox, [{
    key: 'handleButtonClicks',
    value: function handleButtonClicks(event) {
      console.log('handle button click');
    }
  }, {
    key: 'handleEnter',
    value: function handleEnter(event) {
      console.log('handle enter');
    }
  }, {
    key: 'render',
    value: function render() {
      var dataPointComp = this.state.dataPoints.map(function (tuple) {
        return React.createElement(DataPoint, { className: 'dataPoint', position: tuple });
      });
      return React.createElement(
        'div',
        null,
        React.createElement(DisplayWindow, { records: this.state.calculatorRecords }),
        React.createElement(InputBox, { buttonClick: this.handleButtonClicks.bind(this), handleEnter: this.handleEnter, currentCalc: this.state.currentCalc })
      );
    }
  }]);

  return CalculatorBox;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jYWxjdWxhdG9yLmpzeCJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yQm94IiwicHJvcHMiLCJzdGF0ZSIsImNhbGN1bGF0b3JSZWNvcmRzIiwiY3VycmVudENhbGMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhUG9pbnRDb21wIiwiZGF0YVBvaW50cyIsIm1hcCIsInR1cGxlIiwiaGFuZGxlQnV0dG9uQ2xpY2tzIiwiYmluZCIsImhhbmRsZUVudGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXaW5kb3ciLCJCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKO0FBQ0E7QUFDQSx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQ0UsQ0FBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxDQUFELEVBQ0UsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEdBQVAsQ0FERixFQUVFLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxHQUFQLENBRkYsQ0FGUztBQU1YQyxtQkFBYTtBQU5GLEtBQWI7QUFGaUI7QUFVbEI7Ozs7dUNBRW1CQyxLLEVBQU87QUFDekJDLGNBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNEOzs7Z0NBQ1lGLEssRUFBTztBQUNsQkMsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDRDs7OzZCQUNPO0FBQ04sVUFBSUMsZ0JBQWdCLEtBQUtOLEtBQUwsQ0FBV08sVUFBWCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBU0MsS0FBVCxFQUFlO0FBQzNELGVBQU8sb0JBQUMsU0FBRCxJQUFXLFdBQVUsV0FBckIsRUFBaUMsVUFBVUEsS0FBM0MsR0FBUDtBQUNELE9BRm1CLENBQXBCO0FBR0EsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxhQUFELElBQWUsU0FBUyxLQUFLVCxLQUFMLENBQVdDLGlCQUFuQyxHQURGO0FBRUUsNEJBQUMsUUFBRCxJQUFVLGFBQWEsS0FBS1Msa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQXZCLEVBQTJELGFBQWEsS0FBS0MsV0FBN0UsRUFBMEYsYUFBYSxLQUFLWixLQUFMLENBQVdFLFdBQWxIO0FBRkYsT0FERjtBQU1EOzs7O0VBL0J5QlcsTUFBTUMsUzs7QUFrQ2xDQyxPQUFPQyxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJjYWxjdWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvckJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vbmVlZHMgdG8gaGF2ZSBkYXRhUG9pbnQgc3RhdGUgdG8gdXNlIGl0IHRvIHJlbmRlciBwb2ludHMgb24geCx5IGF4aXNcbiAgLy8gYW5kIHRvIHNhdmUgdXNlciBpbnB1dHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhbGN1bGF0b3JSZWNvcmRzOlxuICAgICAgICBbWzUwMCwzMDAsJysnXSxcbiAgICAgICAgICBbMTAsMTAsJysnXSxcbiAgICAgICAgICBbNTAsNTAsJysnXVxuICAgICAgICBdLFxuICAgICAgY3VycmVudENhbGM6IFtdIFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGlja3MgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZSBidXR0b24gY2xpY2snKTtcbiAgfVxuICBoYW5kbGVFbnRlciAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlIGVudGVyJyk7XG4gIH0gXG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhUG9pbnRDb21wID0gdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gPERhdGFQb2ludCBjbGFzc05hbWU9J2RhdGFQb2ludCcgcG9zaXRpb249e3R1cGxlfS8+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpc3BsYXlXaW5kb3cgcmVjb3Jkcz17dGhpcy5zdGF0ZS5jYWxjdWxhdG9yUmVjb3Jkc30vPlxuICAgICAgICA8SW5wdXRCb3ggYnV0dG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2tzLmJpbmQodGhpcyl9IGhhbmRsZUVudGVyPXt0aGlzLmhhbmRsZUVudGVyfSBjdXJyZW50Q2FsYz17dGhpcy5zdGF0ZS5jdXJyZW50Q2FsY30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaW5kb3cuQmFja2dyb3VuZCA9IEJhY2tncm91bmQ7Il19