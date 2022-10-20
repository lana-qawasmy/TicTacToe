import logo from './logo.svg';
import './App.css';
import Board from './components/board/board.component';
import { useState } from 'react';

function App() {
  const [turn , setTurn] = useState ('X') ;
  const flipTurn = (newTurn) => setTurn (newTurn);
  return (
    <div className="App">
      <Board turn = {turn}  onChange = {flipTurn}/>
    </div>
  );
}

export default App;
