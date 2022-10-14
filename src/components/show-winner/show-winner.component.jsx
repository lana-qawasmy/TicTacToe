import './show-winner.css'

const ShowWinner = (props) => {
    return (
        <div className='showWinner'>
            <span>
                {props.winner !== 'Draw' ? `The winner is ${props.winner}` : 'Draw :-)'}
            </span>
            <br />
            <button onClick={props.closeShowWinner}>Restart</button>
        </div>
    );
}

export default ShowWinner;