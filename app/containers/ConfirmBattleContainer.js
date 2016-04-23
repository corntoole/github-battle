var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }
  ,getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  }
  ,componentWillMount: function() {
    console.log('Console will mount');
  }
  ,componentWillUnount: function() {
    console.log('Console will unmount');
  }
  ,componentWillReceiveProps: function() {
    console.log('Console will receive props');
  }
  ,componentDidMount: function() {
    var query = this.props.location.query;
    console.log('Console did mount');
  }
  ,render: function()  {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>

    );
  }
});

module.exports = ConfirmBattleContainer;
