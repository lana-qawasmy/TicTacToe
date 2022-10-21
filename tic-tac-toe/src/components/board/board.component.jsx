import './board.css';
import Card from "../card/card.component";
import { useState } from 'react';
import Popup from '../popup/popup.component';

const Board = (props) => {
  const [boardVals, setBoardVals] = useState(Array(9).fill("n")); // n : none
  const [moves, setMoves] = useState({ xMoves: [], oMoves: [] });
  const [turn, setTurn] = useState(props.turn);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [wins, setWins] = useState({ xWins: props.wins.xWins, oWins: props.wins.oWins });

  const clickCard = (index) => {
    if (boardVals[index] !== 'n') return;
    //adding value of current turn to board
    const newVals = [...boardVals];
    newVals[index] = turn;
    setBoardVals(newVals);

    //adding index of current move to the array 'moves' depending on whose turn it is
    if (turn === 'X') {
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
    setTurn(t => t === 'X' ? 'O' : 'X');
  };

  const calculateWinner = () => {
    let playerMoves = (turn === 'X' ? moves.xMoves : moves.oMoves).join('');
    let winStates = ['012', '345', '678', '036', '147', '258', '048', '246'];

    for (let i = 0; i < 8; i += 1) {
      let [a, b, c] = winStates[i];
      if (playerMoves.includes(a) && playerMoves.includes(b) && playerMoves.includes(c)) {
        setWin(true);
        if (turn === 'X') {
          const tmp = wins.xWins + 1;
          setWins({ ...wins, xWins: tmp });
        }
        else {
          const tmp = wins.oWins + 1;
          setWins({ ...wins, oWins: tmp });
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
              placeholder={turn}
            />
          );
        })
      }
      <Popup alert={gameOver ? 'alert' : ''} draw={!win} winner={turn === 'X' ? 'O' : 'X'} />
    </div>
  );
};

export default Board;