import { useState } from 'react';
import './App.css';
import Board from './components/board/board.component';
import Score from './components/score/score.component';
import ShowWinner from './components/show-winner/show-winner.component';

function App() {

  const [turn, setTurn] = useState('X');
  const [O, setO] = useState(0);
  const [X, setX] = useState(0);
  const [winner, setWinner] = useState('');
  const [cells, setCells] = useState(Array(9).fill(""));

  const oWins = (o) => {
    setO((o) => { return (o + 1) });
  }
  const xWins = (x) => {
    setX((x) => { return (x + 1) });
  }
  const changeTurn = (t) => {
    setTurn(t === 'X' ? 'O' : 'X');
  }

  const onWin = (win) => {
    setWinner(win);
    changeTurn(win);
    if (win === 'X')
      xWins(X);
    if (win === 'O')
      oWins(O);
  }
  const closeShowWinner = () => {
    setWinner('');
  }

  const clearAll = () => {
    setO(0);
    setX(0);
    setTurn('X');
    setWinner('');
    setCells(Array(9).fill(''));
  }

  return (
    <div className="App">
      {
        winner === '' &&
        <Score
          turn={turn}
          X={X}
          O={O}
        />
      }
      {
        winner === '' &&
        <Board
          cells={cells}
          setCells={setCells}
          turn={turn}
          setTurn={changeTurn}
          onWinning={onWin}
        />

      }
      {
        winner === '' &&
        <button className='clear' onClick={clearAll}>
          Clear
        </button>
      }
      {
        winner !== '' &&
        <ShowWinner
          winner={winner}
          closeShowWinner={closeShowWinner}
        />
      }


    </div>
  );
}

export default App;
