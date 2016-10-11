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
    value: function handleButtonClicks(event) {}
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
        React.createElement(InputBox, { buttonClick: this.handleButtonClicks.bind(this), currentCalc: this.state.currentCalc })
      );
    }
  }]);

  return CalculatorBox;
}(React.Component);

Window.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jYWxjdWxhdG9yLmpzeCJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yQm94IiwicHJvcHMiLCJzdGF0ZSIsImNhbGN1bGF0b3JSZWNvcmRzIiwiY3VycmVudENhbGMiLCJldmVudCIsImRhdGFQb2ludENvbXAiLCJkYXRhUG9pbnRzIiwibWFwIiwidHVwbGUiLCJoYW5kbGVCdXR0b25DbGlja3MiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXaW5kb3ciLCJCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKO0FBQ0E7QUFDQSx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQ0UsQ0FBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxDQUFELEVBQ0UsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEdBQVAsQ0FERixFQUVFLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxHQUFQLENBRkYsQ0FGUztBQU1YQyxtQkFBYTtBQU5GLEtBQWI7QUFGaUI7QUFVbEI7Ozs7dUNBRW1CQyxLLEVBQU8sQ0FFMUI7Ozs2QkFFTztBQUNOLFVBQUlDLGdCQUFnQixLQUFLSixLQUFMLENBQVdLLFVBQVgsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVNDLEtBQVQsRUFBZTtBQUMzRCxlQUFPLG9CQUFDLFNBQUQsSUFBVyxXQUFVLFdBQXJCLEVBQWlDLFVBQVVBLEtBQTNDLEdBQVA7QUFDRCxPQUZtQixDQUFwQjtBQUdBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsYUFBRCxJQUFlLFNBQVMsS0FBS1AsS0FBTCxDQUFXQyxpQkFBbkMsR0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxhQUFhLEtBQUtPLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUF2QixFQUEyRCxhQUFhLEtBQUtULEtBQUwsQ0FBV0UsV0FBbkY7QUFGRixPQURGO0FBTUQ7Ozs7RUE3QnlCUSxNQUFNQyxTOztBQWdDbENDLE9BQU9DLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6ImNhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYWxjdWxhdG9yQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9uZWVkcyB0byBoYXZlIGRhdGFQb2ludCBzdGF0ZSB0byB1c2UgaXQgdG8gcmVuZGVyIHBvaW50cyBvbiB4LHkgYXhpc1xuICAvLyBhbmQgdG8gc2F2ZSB1c2VyIGlucHV0c1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FsY3VsYXRvclJlY29yZHM6XG4gICAgICAgIFtbNTAwLDMwMCwnKyddLFxuICAgICAgICAgIFsxMCwxMCwnKyddLFxuICAgICAgICAgIFs1MCw1MCwnKyddXG4gICAgICAgIF0sXG4gICAgICBjdXJyZW50Q2FsYzogW10gXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrcyAoZXZlbnQpIHtcblxuICB9XG4gICAgXG4gIHJlbmRlcigpe1xuICAgIHZhciBkYXRhUG9pbnRDb21wID0gdGhpcy5zdGF0ZS5kYXRhUG9pbnRzLm1hcChmdW5jdGlvbih0dXBsZSl7XG4gICAgICByZXR1cm4gPERhdGFQb2ludCBjbGFzc05hbWU9J2RhdGFQb2ludCcgcG9zaXRpb249e3R1cGxlfS8+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpc3BsYXlXaW5kb3cgcmVjb3Jkcz17dGhpcy5zdGF0ZS5jYWxjdWxhdG9yUmVjb3Jkc30vPlxuICAgICAgICA8SW5wdXRCb3ggYnV0dG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2tzLmJpbmQodGhpcyl9IGN1cnJlbnRDYWxjPXt0aGlzLnN0YXRlLmN1cnJlbnRDYWxjfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpbmRvdy5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZDsiXX0=