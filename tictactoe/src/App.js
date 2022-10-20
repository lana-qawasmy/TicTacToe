import logo from './logo.svg';
import './App.css';
import Board from './components/board/board.component';
import { useState } from 'react';

function App() {
  const [turn , setTurn] = useState ('X') ;
  const [winner , setWinner] = useState ({xWin : 0 , oWin : 0}) ;
  const flipTurn = (newTurn) => setTurn (newTurn);
  const addWin = (newWineer) => {
    const temp = {...winner} ;
    if (newWineer === 'X')
      temp.xWin ++ ;
    if (newWineer === 'O')
      temp.oWin ++ ;
    setWinner (temp) ;
    console.log ('winner' , temp) ;
  }
  return (
    <div className="App">
      <Board turn = {turn} winner = {winner} onWin = {addWin}  onChange = {flipTurn}/>
    </div>
  );
}

export default App;
