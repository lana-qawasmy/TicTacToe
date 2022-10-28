import { useState } from 'react';
import Board from '../board/board';

const Game = () => {
   
    const [nextTurnx, setNextTurnx] = useState(true);
  
    const [arr, setArr] = useState([Array(9).fill('')]);
    const [stepNumber, setStepNumber] = useState(0);
    const winner = calculateWinner(arr[stepNumber]);
    const first = nextTurnx ? "X" : "O";
    const handel = (i) => {
        const arrPoint = arr.slice(0, stepNumber + 1)
        const current = arrPoint[stepNumber]
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = first;
        setArr([...arrPoint, squares]);
        setStepNumber(arrPoint.length);
        setNextTurnx(!nextTurnx);

    }
    const jumpTo = (step) => {
        setStepNumber(step);
        setNextTurnx(step % 2 === 0);
    };
    const renderMove = () =>
        arr.map((_step, move) => {
            const dis = move ? `Go to move${move}` : "Go to start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{dis}</button>
                </li>
            );
        });

        function calculateWinner(squares) {
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; i++) {
              const [a, b, c] = lines[i];
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
            }
            return null;
          }
    return (
        <>
            <h1>GameTime</h1>
            <Board squares={arr[stepNumber]} onClick={handel} />
            <div className="info">
                <div>
                    <h3>History</h3>
                    {renderMove()}
                </div>
                <h3>{winner ? "winner: " + winner : "Turn: " + first}</h3>
            </div>
        </>


        // <div className="all">

        //    <div className='first'>{
        //     arr.map((item,index)=>{
        //         <div className='' onClick={setTurn()}></div>
        //     })

        //    }</div>
        // </div>
    );
};
export default Game;