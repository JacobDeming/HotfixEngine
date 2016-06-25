var React = require('react');
var ReactDOM = require('react-dom');

var GameHeader = React.createClass({
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Game Header</div>
        <div className="panel-body">
          {/*Option to add header text*/}
          <div className="row">
            <p>Some content here</p>
          </div>
        </div>
      </div>
      )
  }
});

module.exports = GameHeader;