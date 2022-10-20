import { useState } from 'react';
import './App.css';
import Board from './components/board/board';
import Result from './components/result-board/result';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xTurn, setXturn] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [winnerMessage, setWinnerMessage] = useState('');


  const handleButtonClick = (buttonIndex) => {
    const updateBoard = board.map((value, index) => {
      if (buttonIndex === index) {
        return xTurn === true ? 'x' : 'o';
      }
      else return value;
    })

    setBoard(updateBoard);

    const winner = checkWinner(updateBoard);
    let { oScore } = scores;
    let { xScore } = scores;

    if (winner === 'o') {

      oScore += 1;
      setScores({ ...scores, oScore });
      setWinnerMessage('O is Winner');

      setTimeout(() => {
        setWinnerMessage('');
      }, 2000);

    } else if (winner === 'x') {

      xScore += 1;
      setScores({ ...scores, xScore });
      setWinnerMessage('X is Winner');

      setTimeout(() => {
        setWinnerMessage('');
      }, 2000);
    }

    else if (updateBoard.every(e => e !== '')) {
      setWinnerMessage('draw');

      setTimeout(() => {
        setWinnerMessage('');
      }, 2000);
      resetBoard();
    }

    console.log(scores);
    setXturn(!xTurn);
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(''));
  }

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


  const checkWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        resetBoard();
        return board[x];
      }
    }
  }

  const resetAll = () => {
    resetBoard();
    setScores({ xScore: 0, oScore: 0 })
  }
  return (
    <div className="App">
      <Result xScore={scores.xScore} oScore={scores.oScore} />
      <Board board={board} onClick={handleButtonClick} />
      <button className='reset-button' onClick={() => resetAll()}>Reset</button>
      {
        <div>{winnerMessage}</div>
      }
    </div>
  );
}

export default App;
