import logo from './logo.svg';
import './App.css';
import Board from './components/board/board.component';
import { useEffect, useState } from 'react';
import Result from './components/result/result.component';

function App() {
  const [turn, setTurn] = useState('X');
  const [score, setScore] = useState({ xWin: 0, oWin: 0 });
  const [winner , setWinner] = useState ('') ;
  const [cells , setCells] = useState (Array(9).fill('')) ;
  const flipTurn = (newTurn) => setTurn(newTurn);
 /**
  * 
  * @param {String} newWinner 
  */
  const addWin = (newWinner , newCells) => {
    console.log ('newWinner' , newWinner) ;
    setWinner (newWinner) ;
    const temp = { ...score };
    if (newWinner === 'X')
      temp.xWin++;
    if (newWinner === 'O')
      temp.oWin++;
    setScore(temp);
    setCells (newCells) ;
    // console.log('winner', temp);
  }

  const cellsChange = (newCells) => setCells (newCells)
  

  return (
    <div className="App">
      {winner !== '' 
      ? <Result cells = {cells} winner = {winner} onWin={addWin}/> 
      : <Board turn={turn} score={score} onWin={addWin} onChange={flipTurn} cells = {cells} onCellsChange = {cellsChange} />}
    </div>
  );
}

export default App;
