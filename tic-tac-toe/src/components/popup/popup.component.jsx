import './popup.css';

const Popup = (props) => {
  return (
    <div className={`Popup ${props.alert}`}>
      <p>{!props.draw ? `${props.winner} wins!` : `draw!`}</p>
      <button onClick={props.continueGame}>Continue Playing</button>
      <button onClick={props.restartGame}>Restart Game</button>
    </div>
  );
};

export default Popup;