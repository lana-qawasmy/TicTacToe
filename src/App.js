import { useState } from 'react';
import './App.css';
import Board from './components/board/board.components';

function App() {

  const [wins, setWins] = useState({ XCount: 0, OCount: 0 });
  const [turn, setTurn] = useState("X");

  const OnWin = (winner) => {

    if (winner === "X") {

      setWins({ ...wins, XCount: wins.XCount + 1 });

    } else if (winner === "O") {

      setWins({ ...wins, OCount: wins.OCount + 1 });
    }

  }
  return (
    <div className="App">

      <p className="App-p">Welcome To My Tic Tac Toe </p>

      <div className="bar">

        <span>X : {wins.XCount}</span>
        <span>O : {wins.OCount}</span>
        <span>{turn} Turn</span>

      </div>

      <Board onTurnChange={setTurn} OnWin={OnWin} turn={turn}/>
    </div>
  );
}

export default App;
