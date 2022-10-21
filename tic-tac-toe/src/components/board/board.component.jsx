import './board.css';
import Card from "../card/card.component";
import { useState } from 'react';
import Popup from '../popup/popup.component';

const Board = (props) => {
  const [boardVals, setBoardVals] = useState(Array(9).fill("n")); // n : none
  const [moves, setMoves] = useState({ xMoves: [], oMoves: [] });
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const clickCard = (index) => {
    if (boardVals[index] !== 'n') return;
    //adding value of current props.turn to board
    const newVals = [...boardVals];
    newVals[index] = props.turn;
    setBoardVals(newVals);

    //adding index of current move to the array 'moves' depending on whose props.turn it is
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
    checkGameOver();
    props.setTurn(t => t === 'X' ? 'O' : 'X');
  };

  const calculateWinner = () => {
    let playerMoves = (props.turn === 'X' ? moves.xMoves : moves.oMoves).join('');
    let winStates = ['012', '345', '678', '036', '147', '258', '048', '246'];

    for (let i = 0; i < 8; i += 1) {
      let [a, b, c] = winStates[i];
      if (playerMoves.includes(a) && playerMoves.includes(b) && playerMoves.includes(c)) {
        setWin(true);
        if (props.turn === 'X') {
          const tmp = props.wins.xWins + 1;
          props.setWins({ ...props.wins, xWins: tmp });
        }
        else {
          const tmp = props.wins.oWins + 1;
          props.setWins({ ...props.wins, oWins: tmp });
        }
        return true;
      }
    }
    return false;
  };

  const boardFull = () => {
    if (moves.xMoves.length + moves.oMoves.length === 9)
      return true;
    return false;
  };

  const checkGameOver = () => {
    if (calculateWinner() || boardFull())
      setGameOver(true);
  };

  return (
    <div className='board'>
      {
        boardVals.map((item, index) => {
          return (
            <Card
              key={index}
              onClick={() => { clickCard(index); }}
              value={item !== 'n' ? item : 'blank'}
              placeholder={props.turn}
            />
          );
        })
      }
      <Popup alert={gameOver ? 'alert' : ''} draw={!win} winner={props.turn === 'X' ? 'O' : 'X'} />
    </div>
  );
};

export default Board;