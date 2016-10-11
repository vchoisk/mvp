'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(Background, null);
    }
  }]);

  return App;
}(React.Component);

console.log('this is it ', document.body);
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRU87QUFDTixhQUNFLG9CQUFDLFVBQUQsT0FERjtBQUdEOzs7O0VBVGVDLE1BQU1DLFM7O0FBV3hCQyxRQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkMsU0FBU0MsSUFBcEM7QUFDQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCSCxTQUFTSSxjQUFULENBQXdCLEtBQXhCLENBQXpCOztBQUVBQyxPQUFPWCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhY2tncm91bmQgLz5cbiAgICApO1xuICB9XG59XG5jb25zb2xlLmxvZygndGhpcyBpcyBpdCAnLCBkb2N1bWVudC5ib2R5KTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==