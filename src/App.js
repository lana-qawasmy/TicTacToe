import { useState } from 'react';
import './App.css';
import Board from './components/board/board.component';
import Score from './components/score/score.component';

function App() {
  const [winner, setWinner] = useState('');
  const onWin = (win) => {
    setWinner(win);
  }
  return (
    <div className="App">
      <Score />
      <Board
        onWinning = {onWin}
      />
    </div>
  );
}

export default App;
