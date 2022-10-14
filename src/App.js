import { useState } from 'react';
import './App.css';
import Board from './components/board/board.component';
import Score from './components/score/score.component';

function App() {

  const [turn, setTurn] = useState('X');
  const [O, setO] = useState(0);
  const [X, setX] = useState(0);
  const [winner, setWinner] = useState('');

  const oWins = () => {
    setO((o) => { return o + 1 });
  }
  const xWins = () => {
    setX((x) => { return x + 1 });
  }
  const changeTurn = (t) => {
    setTurn(t === 'X' ? 'O' : 'X');
  }

  const onWin = (win) => {
    setWinner(win);
  }
  return (
    <div className="App">
      <Score 
        turn = {turn}
      />
      <Board
        turn={turn}
        setTurn = {changeTurn}
        onWinning={onWin}
      />
    </div>
  );
}

export default App;
