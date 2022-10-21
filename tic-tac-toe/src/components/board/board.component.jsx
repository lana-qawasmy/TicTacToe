import './board.css';
import Card from "../card/card.component";
import { useState } from 'react';

const Board = (props) => {
  const [boardVals, setBoardVals] = useState(Array(9).fill("n")); // n : none
  const [moves, setMoves] = useState({ xMoves: [], oMoves: [] });

  const clickCard = (index) => {
    if (boardVals[index] !== 'n') return;
    //adding value of current turn to board
    const newVals = [...boardVals];
    newVals[index] = props.turn;
    setBoardVals(newVals);

    //adding index of current move to the array 'moves' depending on whose turn it is
    if (props.turn === 'X') {
      let arr = moves.xMoves;
      arr.push(index);
      arr.sort();
      setMoves({
        ...moves,
        xMoves: [...arr]
      });
      // console.log('xMoves: ', moves.xMoves);
    }
    else {
      let arr = moves.oMoves;
      arr.push(index);
      arr.sort();
      setMoves({
        ...moves,
        oMoves: [...arr]
      });
      // console.log('oMoves: ', moves.oMoves);
    }
    calculateWinner();
    props.setTurn(t => t === 'X' ? 'O' : 'X');
  };

  const calculateWinner = () => {
    let playerMoves = (props.turn === 'X' ? moves.xMoves : moves.oMoves).join('');
    let wins = ['012', '345', '678', '036', '147', '258', '048', '246'];

    for (let i = 0; i < 8; i += 1){
      let [a, b, c] = wins[i];
      if(playerMoves.includes(a) && playerMoves.includes(b) && playerMoves.includes(c)){
        console.log(props.turn, "Wins!!!")
      }
    }
  };

  return (
    <div className='board'>
      {
        boardVals.map((item, index) => {
          return (
            <Card
              key={index}
              onClick={() => clickCard(index)}
              value={item !== 'n' ? item : ''}
            />
          );
        })
      }

    </div>
  );
};

export default Board;