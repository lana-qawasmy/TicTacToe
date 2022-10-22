import { useState } from 'react';
import './App.css';
import Board from './components/board/board.component';
import Fscore from './components/fscore/fscore.component';
import RestartButton from './components/restartButton/restartButton.component';
function App() {

  const winningCards = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(true);

  const card = (cardId) => {
    const updateCard = board.map((value, indx) => {
      if (indx === cardId) {
        return turn === true ? " X " : " O ";
      }
      else {
        return value;
      }
    })
    setBoard(updateCard);

    const finalWinner = whoWin(updateCard);

    if (finalWinner === "O")
     {
      let { oScore } = scores;
      oScore = oScore + 1;
      setScores({ ...scores, oScore })
    }
    else {

      let { xScore } = scores;
      xScore = xScore + 1;
      setScores({ ...scores, xScore })
    }

  
    setTurn(!turn);
  };
  const whoWin = (board) => {

    for (let i = 0; i < winningCards.length; i++) {
      const [x, y, z] = winningCards[i];
      if (board[x] && board[x] === board[y] && board[z]) {
        console.log(board[x]);
        setGameOver(true)
        return board[x];
      }
    }
  };
  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))

  };

  return (
    <div className="App">
      <Fscore scores={scores} turn={turn} />
      <Board board={board} onClick={gameOver ? resetGame : card} />
      <RestartButton resetGame={resetGame} />
    </div>
  );
}

export default App;
