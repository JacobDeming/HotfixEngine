var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');

var GameHeader = require('./GameHeader');
var GameContent = require('./GameContent');
var GameFooter = require('./GameFooter');

var Game = React.createClass({
  render: function(){
    return(

      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <GameHeader />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <GameContent />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <GameFooter />
          </div>
        </div>

      </div>
    )
  }
});

module.exports = Game;