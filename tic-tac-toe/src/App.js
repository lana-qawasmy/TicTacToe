import './App.css';
import { useState } from 'react';
import Board from './components/board/board.component';

function App() {
  const [turn, setTurn] = useState("X");

  return (
    <div className="App">
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  );
}

export default App;