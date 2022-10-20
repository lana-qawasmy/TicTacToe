import './board.css'
import Card from "../card/card.component";
import { useState } from 'react';

const Board = (props) => {
  const [boardVals, setBoardVals] = useState(Array(9).fill("n")); // n : none

  const clickCard = (index) => {
    if (boardVals[index] !== 'n') return;
    const newVals = [...boardVals];
    newVals[index] = props.turn;
    // console.log('newVals', newVals);
    setBoardVals(newVals);
    props.setTurn(t => t === 'X' ? 'O' : 'X');
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