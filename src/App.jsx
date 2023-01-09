import Board from "./component/board/board.component";
import { useEffect, useState } from "react";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(false);
  //It sets the game state to the index of the clicked button
  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`! ${winner} Is Winner !`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      " checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="header">
      <p className="header-text">Tic Tac Toe</p>
      <div className="row jc-center">
        <Board
          className="b-bottom-right"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <Board
          className="b-bottom-right"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <Board
          className="b-bottom"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row jc-center">
        <Board
          className="b-bottom-right"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <Board
          className="b-bottom-right"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <Board
          className="b-bottom"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row jc-center">
        <Board
          className="b-right"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <Board
          className="b-right"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <Board onClick={() => onUserClicked(8)} state={gameState[8]} />
      </div>
      <button className="button-35" onClick={clearGame}>
        Clear Game
      </button>
    </div>
  );
}

export default App;
