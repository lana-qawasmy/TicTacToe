import { useState } from "react";
import "./board.css";

const Board = (props) => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [wins, setWins] = useState({ x: 0, o: 0 });
  const [result, setResult] = useState("");
  const [winner, setWinner] = useState("");

  const clearAll = () => {
    setCells(Array(9).fill(""));
    setTurn("X");
    setResult("");
  };

  const evaluate = (board) => {
    if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
      return board[0];
    } else if (
      board[0] !== "" &&
      board[0] === board[3] &&
      board[3] === board[6]
    ) {
      return board[0];
    } else if (
      board[0] !== "" &&
      board[0] === board[4] &&
      board[4] === board[8]
    ) {
      return board[0];
    } else if (
      board[1] !== "" &&
      board[1] === board[4] &&
      board[4] === board[7]
    ) {
      return board[1];
    } else if (
      board[2] !== "" &&
      board[2] === board[5] &&
      board[5] === board[8]
    ) {
      return board[2];
    } else if (
      board[3] !== "" &&
      board[3] === board[4] &&
      board[4] === board[5]
    ) {
      return board[3];
    } else if (
      board[6] !== "" &&
      board[6] === board[7] &&
      board[7] === board[8]
    ) {
      return board[6];
    } else if (
      board[2] !== "" &&
      board[2] === board[4] &&
      board[4] === board[6]
    ) {
      return board[2];
    } else if (
      board[0] !== "" &&
      board[1] !== "" &&
      board[2] !== "" &&
      board[3] !== "" &&
      board[4] !== "" &&
      board[5] !== "" &&
      board[6] !== "" &&
      board[7] !== "" &&
      board[8] !== ""
    ) {
      return "draw";
    } else {
      return "";
    }
  };

  const changeState = (index) => {
    if (cells[index] !== "") {
      return;
    }
    const newCells = [...cells];
    newCells[index] = turn;
    setCells(newCells);
    setTurn((t) => (t === "X" ? "O" : "X"));
    setResult(evaluate(newCells));
  };

  if (result === "X") {
    setWins({ ...wins, x: wins.x + 1 });
    setWinner("X");
    clearAll();
  } else if (result === "O") {
    setWins({ ...wins, o: wins.o + 1 });
    setWinner("O");
    clearAll();
  } else if (result === "draw") {
    setWinner("draw");
    clearAll();
  }

  const restart = () => {
    clearAll();
    setWinner("");
  };

  return (
    <div className="board-component">
      <div className="header">
        <span>X : {wins?.x}</span>
        <span>O : {wins?.o}</span>
        <span>{turn} : Turn</span>
      </div>
      <div className="board">
        {cells.map((item, index) => {
          return (
            <button
              className={`cell ${item}`}
              key={index}
              onClick={() => changeState(index)}
            >
              {item}
            </button>
          );
        })}
        {(winner === "O" || winner === "X") && (
          <div className="result">
            <p>{winner} Is Winner</p>
            <button
              className="pushable"
              role="button"
              onClick={() => restart()}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Restart</span>
            </button>
          </div>
        )}
        {winner === "draw" && (
          <div className="result">
            <p>Draw</p>
            <button
              className="pushable"
              role="button"
              onClick={() => restart()}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Restart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Board;
