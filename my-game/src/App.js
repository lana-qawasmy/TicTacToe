import { useState } from 'react';
import './App.css';
import GameSpace from './game-space/GameSpace';
import Score from './Score/Score';
import Result from './Result/Result';

function App() {
  const[blockGame , setBlockGame] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState('');
  const[turn , setTurn] = useState('X');
   const [cntX , setCntX] = useState(0);
   const [cntO , setCntO] = useState(0);

   const changeTurn = (t) => {
     setTurn( t === 'X' ? 'O' : 'X')
   }
   const ScoreX = (x) => {
     setCntX(x => {return(x + 1)});
   }

   const ScoreO = (o) => {
     setCntO(o => {return(o + 1)});
   }
   const onWin = (win) => {
    changeTurn(win);
    setWinner(win);
    console.log("win = " + win);
    if (win === 'X')
      setCntX(cntX+1);
    if (win === 'O')
      setCntO(cntO+1);
  }
    return (
      <div className="App">
    <div className="game">
 {
   winner === '' &&<Score 
       turn={turn}
       X={cntX} O={cntO}
       />
 }
      { winner === '' &&
       <GameSpace turn={turn} 
       setTurn={changeTurn}
        blockGame={blockGame}
       setBlockGame={setBlockGame} 
        onWinning={onWin}
        />
       }
    {  
     winner !== '' &&
       <Result
        winner={winner} 
        blockGame={blockGame} 
        setBlockGame={setBlockGame}
        onWin={onWin}
        />

     }
    </div>

      </div>
    );
}

export default App;