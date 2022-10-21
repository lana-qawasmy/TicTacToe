import './App.css';
import { useState } from 'react';
import Board from './components/board/board.component';

function App() {
  const [turn, setTurn] = useState("X");
  const [wins] = useState({ xWins: 0, oWins: 0 });

  return (
    <div className="App">
      <Board turn={turn} setTurn={setTurn} wins />
      <div className='results'>
        <span className='X'>X</span>
        <span>{wins.xWins} : {wins.oWins} </span>
        <span className='O'>O</span>
      </div>
    </div>
  );
}

export default App;