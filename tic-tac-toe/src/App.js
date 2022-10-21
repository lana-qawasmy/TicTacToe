import './App.css';
import { useState } from 'react';
import Board from './components/board/board.component';

function App() {
  const [turn, setTurn] = useState("X");
  const [wins, setWins] = useState({ xWins: 0, oWins: 0 });

  return (
    <div className="App">
      <div className={`${turn} turn`} >
        {turn}'s turn
        </div>
      <Board turn={turn} setTurn={setTurn} wins={wins} setWins={setWins}/>
      <div className='results'>
        <span className='X'>X</span>
        <span>{wins.xWins} : {wins.oWins} </span>
        <span className='O'>O</span>
      </div>
    </div>
  );
}

export default App;