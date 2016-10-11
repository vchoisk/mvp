'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayWindow = function (_React$Component) {
  _inherits(DisplayWindow, _React$Component);

  function DisplayWindow(props) {
    _classCallCheck(this, DisplayWindow);

    return _possibleConstructorReturn(this, (DisplayWindow.__proto__ || Object.getPrototypeOf(DisplayWindow)).call(this, props));
  }

  _createClass(DisplayWindow, [{
    key: 'render',
    value: function render() {
      var recordDOM = this.props.records.map(function (record) {
        var stringRecord = record[0].toString() + record[2] + record[1];
        return React.createElement(
          'table',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              stringRecord
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'span',
                { className: 'recordX' },
                'X'
              )
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' = '
            ),
            React.createElement(
              'td',
              null,
              JSON.parse(stringRecord)
            )
          )
        );
      });
      return (/*HTML Dom to render*/
        React.createElement(
          'div',
          null,
          recordDOM
        )
      );
    }
  }]);

  return DisplayWindow;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kaXNwbGF5V2luZG93LmpzeCJdLCJuYW1lcyI6WyJEaXNwbGF5V2luZG93IiwicHJvcHMiLCJyZWNvcmRET00iLCJyZWNvcmRzIiwibWFwIiwic3RyaW5nUmVjb3JkIiwicmVjb3JkIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHlIQUNWQSxLQURVO0FBRWpCOzs7OzZCQUVPO0FBQ04sVUFBSUMsWUFBWSxLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUFVO0FBQy9DLFlBQUlDLGVBQWVDLE9BQU8sQ0FBUCxFQUFVQyxRQUFWLEtBQXFCRCxPQUFPLENBQVAsQ0FBckIsR0FBK0JBLE9BQU8sQ0FBUCxDQUFsRDtBQUNBLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUtEO0FBQUwsYUFBSjtBQUEyQjtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFBSjtBQUEzQixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKO0FBQWdCO0FBQUE7QUFBQTtBQUFLRyxtQkFBS0MsS0FBTCxDQUFXSixZQUFYO0FBQUw7QUFBaEI7QUFGRixTQURGO0FBTUQsT0FSZSxDQUFoQjtBQVNBLGFBQVE7QUFDTjtBQUFBO0FBQUE7QUFDR0g7QUFESDtBQURGO0FBS0Q7Ozs7RUFwQnlCUSxNQUFNQyxTIiwiZmlsZSI6ImRpc3BsYXlXaW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEaXNwbGF5V2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciByZWNvcmRET00gPSB0aGlzLnByb3BzLnJlY29yZHMubWFwKHJlY29yZCA9PiB7XG4gICAgICB2YXIgc3RyaW5nUmVjb3JkID0gcmVjb3JkWzBdLnRvU3RyaW5nKCkrcmVjb3JkWzJdK3JlY29yZFsxXTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dHI+PHRkPntzdHJpbmdSZWNvcmR9PC90ZD48dGQ+PHNwYW4gY2xhc3NOYW1lPSdyZWNvcmRYJz5YPC9zcGFuPjwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPiA9IDwvdGQ+PHRkPntKU09OLnBhcnNlKHN0cmluZ1JlY29yZCl9PC90ZD48L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuICgvKkhUTUwgRG9tIHRvIHJlbmRlciovXG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVjb3JkRE9NfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==