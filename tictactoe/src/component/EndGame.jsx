import './End-screen.css';
const EndGame = ({ClearCounter, winCount,restartGame, player, drow }) => {
    return (
        <div className="End-screen">
            {!drow && <span className="win-text">{player ? "O IS THE WINNER " : "X IS THE WINNER"}</span>}
            {drow && <span>DRAW GAME :( </span>}
            <span className='win-count'>
                X : {winCount.X}
                <br />
                O : {winCount.O}
                </span>
            <button className="btn" onClick={restartGame}>Restart Game</button>
            <button className="btn" onClick={ClearCounter}>Reset Counter</button>
        </div>
    );
}
export default EndGame; 