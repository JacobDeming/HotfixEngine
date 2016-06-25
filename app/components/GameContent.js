var React = require('react');
var ReactDOM = require('react-dom');

var GameContent = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0
    }
  },
  updateGame: function(){
    console.log("Game updated!");
    this.setState({
      clicks: this.state.clicks + 1
    });
  },
  componentDidUpdate: function(prevProps, prevState){
    if(prevState.clicks!=this.state.clicks){
      console.log('Component did update!');
    }
  },
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Game Content</div>
        <div className="panel-body">

          <div className="row">
            {/*Player 1 stats update here*/}
            <div className="col-md-3">
              <Player1Stats clicks={this.state.clicks} />
            </div>

            {/*Stageplay happens here*/}
            <div className="col-md-6 text-center">
              <div className="panel panel-default">
                <div className="panel-heading">Timer</div>
                <div className="panel-body">
                  <p>Some content here</p>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">Stage</div>
                <div className="panel-body">
                  <p>Floating combat text here!</p>
                  <p>Some content here</p>
                </div>
              </div>
            </div>

            {/*Player 2 stats update here*/}
            <div className="col-md-3">
              <Player2Stats clicks={this.state.clicks} />
            </div>
          </div>

          {/*Gameplay happens here*/}
          <div className="row">
            <PlayerPlay updateGame={this.updateGame} />
          </div>

        </div>
      </div>
      )
  }
});

var Player1Stats = React.createClass({
  getInitialState: function(){
    return {
      randomNumber: 0
    }
  },
  getRandomNumber: function(){
    var randomNumber = Math.floor(Math.random() * 100);
    this.setState({
      randomNumber: randomNumber
    });
  },
  componentWillReceiveProps: function() {
    console.log('Component received clicks');
    this.getRandomNumber();
  },
  render: function() {
    var num = this.state.randomNumber + '%';
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Player 1 Stats</div>
        <div className="panel-body">

          <p>Life Points: {this.state.randomNumber}</p>
          <div className="progress">
          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80"
            aria-valuemin="0" 
            aria-valuemax="100" 
            style={{width: num}} />
          </div>
          
        </div>
      </div>
      )
  }
});

var Player2Stats = React.createClass({
  getInitialState: function(){
    return {
      randomNumber: 0
    }
  },
  getRandomNumber: function(){
    var randomNumber = Math.floor(Math.random() * 100);
    this.setState({
      randomNumber: randomNumber
    });
  },
  componentWillReceiveProps: function() {
    console.log('Component received clicks');
    this.getRandomNumber();
  },
  render: function() {
    var num = this.state.randomNumber + '%';
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Player 2 Stats</div>
        <div className="panel-body">

          <p>Life Points: {this.state.randomNumber}</p>
          <div className="progress">
          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80"
            aria-valuemin="0" 
            aria-valuemax="100" 
            style={{width: num}} />
          </div>
          
        </div>
      </div>
      )
  }
});

var PlayerPlay = React.createClass({
  handleSubmit:function(){
    this.props.updateGame();
  },
  render: function() {
    return(
      <form className="form-inline">

        <div className="form-group col-sm-3">
          <label htmlFor=" ">
            Condition: 
            <input type="checkbox" name="my-checkbox" defaultChecked />
          </label>
        </div>

        <div className="form-group col-sm-3">
          <label htmlFor=" ">
            Condition: 
            <input type="checkbox" name="my-checkbox" defaultChecked />
          </label>
        </div>

        <div className="form-group col-sm-3">
          <label htmlFor=" ">
            Condition: 
            <input type="checkbox" name="my-checkbox" defaultChecked />
          </label>
        </div>

        <button type="button" className="btn btn-primary" 
          onClick={(e)=>this.handleSubmit()}>Confirm Play</button>

      </form>
    )
  }
});


module.exports = GameContent;