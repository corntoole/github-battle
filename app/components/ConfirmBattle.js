var React = require('react');
var PropTypes = React.PropTypes;
function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
  : <div>CONFIRM BATTLE: {puke(props)} </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
};
module.exports = ConfirmBattle;
var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div>CONFIRM BATTLE: {puke(props)}</div> 
}

module.exports = ConfirmBattle;
