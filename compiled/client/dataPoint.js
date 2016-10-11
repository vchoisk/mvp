"use strict";

var DataPoint = function DataPoint(props) {

  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.cord[0]
    ),
    React.createElement(
      "td",
      null,
      props.cord[1]
    ),
    React.createElement(
      "td",
      null,
      React.createElement(
        "button",
        null,
        "X"
      )
    )
  );
};

window.DataPoint = DataPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9kYXRhUG9pbnQuanN4Il0sIm5hbWVzIjpbIkRhdGFQb2ludCIsInByb3BzIiwiY29yZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXOztBQUV6QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSxZQUFNQyxJQUFOLENBQVcsQ0FBWDtBQUFMLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0QsWUFBTUMsSUFBTixDQUFXLENBQVg7QUFBTCxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsR0FERjtBQU9ELENBVEQ7O0FBV0FDLE9BQU9ILFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6ImRhdGFQb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhUG9pbnQgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIDx0ZD57cHJvcHMuY29yZFswXX08L3RkPiBcbiAgICAgIDx0ZD57cHJvcHMuY29yZFsxXX08L3RkPlxuICAgICAgPHRkPjxidXR0b24+WDwvYnV0dG9uPjwvdGQ+XG4gICAgPC90cj5cbiAgKVxufVxuXG53aW5kb3cuRGF0YVBvaW50ID0gRGF0YVBvaW50O1xuIl19