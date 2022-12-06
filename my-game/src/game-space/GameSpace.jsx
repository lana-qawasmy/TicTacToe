// import { useState } from 'react';
import './GameSpace.css'
// import './Score.css'

const GameSpace = (props) => {
  const handleClick = (index) => {
    if (props.blockGame[index] !== '') return;
    const newVals = [...props.blockGame];
    newVals[index] = props.turn;
    props.setTurn(props.turn);
    props.setBlockGame(newVals);
    let winner = checkWinner(newVals);
    if (winner !== '') {
      console.log(",,,,,,,,,," + winner)
        props.onWinning(winner);
        props.setBlockGame(Array(9).fill(''));
    }
}

const checkWinner = (newVals) => {
   
    for (let j = 0; j < 3; j++) {
        let X = 0, O = 0;
        for (let i = 0; i < 3; i++) {
            X += (newVals[3 * j + i] === 'X');
            O += (newVals[3 * j + i] === 'O');
        }
        if (X === 3)
            return 'X';
        else if (O === 3)
            return 'O';
    }
    
    for (let j = 0; j < 3; j++) {
        let X = 0, O = 0;
        for (let i = 0; i < 3; i++) {
            X += (newVals[j + 3 * i] === 'X');
            O += (newVals[j + 3 * i] === 'O');
        }
        if (X === 3)
            return 'X';
        else if (O === 3)
            return 'O';
    }
    
    let X = 0, O = 0;
    for (let i = 0; i <= 8; i += 4) {
        X += (newVals[i] === 'X');
        O += (newVals[i] === 'O');
    }
    if (X === 3)
        return 'X';
    else if (O === 3)
        return 'O';
    
    X = O = 0;
    for (let i = 2; i <= 6; i += 2) {
        X += (newVals[i] === 'X');
        O += (newVals[i] === 'O');
    }
    if (X === 3)
        return 'X';
    else if (O === 3)
        return 'O';

    // Check the Draw
     for(let i = 0 ; i < 9 ; i++) {
        if(newVals[i] === '') {
            return '';
        }
     }
     return 'Drow';
   
}
return (
  <div className="board">
      
          {
            props.blockGame.map((blocks , indx) => {
              return(
                <div 
                key={indx}
                className={`block ${blocks}`}
                onClick={() => handleClick(indx)}
                    >
                 {blocks !== "" ? blocks : ""}
            </div>
               )
            })
          }
        </div>
    
  )
}

export default GameSpace
