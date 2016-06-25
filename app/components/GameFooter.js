var React = require('react');
var ReactDOM = require('react-dom');

var GameFooter = React.createClass({
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Game Footer</div>
        <div className="panel-body">
          {/*Option to add footer text*/}
          <div className="row">
            <p>(c) Copyright Info</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = GameFooter;