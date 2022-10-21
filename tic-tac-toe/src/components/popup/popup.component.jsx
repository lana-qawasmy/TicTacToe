import './popup.css'

const Popup = (props) => {
  return(
    <div className={`Popup ${props.alert}`}>
      <p>{!props.draw ? `${props.winner} wins!` : `draw!`}</p>
      <button>Continue Playing</button>
      <button>Restart Game</button>
    </div>
  )
}

export default Popup;