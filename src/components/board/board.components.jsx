import { useState } from "react";
import "./board.css";

const Board = (props) => {

    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState("");

    const cellOnClick = (index) => {

        if (cells[index] !== "") return;

        const newCell = [...cells];
        newCell[index] = props.turn;
        setCells(newCell);
        const newTurn = (props.turn === "X" ? "O" : "X");
        props.onTurnChange(newTurn);


        const result = whoesWin(newCell);
        if (result) {
            setWinner(result);
            props.OnWin(result);
        }
    }


    const whoesWin = (boardCells) => {

        //check rows
        if (boardCells[0] !== "" && boardCells[0] === boardCells[1] && boardCells[1] === boardCells[2]) {
            return boardCells[0];
        }
        if (boardCells[3] !== "" && boardCells[3] === boardCells[4] && boardCells[4] === boardCells[5]) {
            return boardCells[3];
        }
        if (boardCells[6] !== "" && boardCells[6] === boardCells[7] && boardCells[7] === boardCells[8]) {
            return boardCells[6];
        }


        //check columns
        if (boardCells[0] !== "" && boardCells[0] === boardCells[3] && boardCells[3] === boardCells[6]) {
            return boardCells[0];
        }
        if (boardCells[1] !== "" && boardCells[1] === boardCells[4] && boardCells[4] === boardCells[7]) {
            return boardCells[1];
        }
        if (boardCells[2] !== "" && boardCells[2] === boardCells[5] && boardCells[5] === boardCells[8]) {
            return boardCells[2];
        }

        //check diagonals
        if (boardCells[0] !== "" && boardCells[0] === boardCells[4] && boardCells[4] === boardCells[8]) {
            return boardCells[0];
        }
        if (boardCells[2] !== "" && boardCells[2] === boardCells[4] && boardCells[4] === boardCells[6]) {
            return boardCells[2];
        }

        //no winner
        if (boardCells.filter(cell => !Boolean(cell)).length > 0) return undefined;

        return "Draw";
    }

    const restart = () => {

        setCells(Array(9).fill(""));
        props.onTurnChange("X");
        setWinner("");
    }
    return (
        <div>

            <div className="board">
                {
                    cells.map((cell, index) =>
                        <div className={`cell ${cell} `} onClick={() => cellOnClick(index)} key={index}>{cell}</div>
                    )
                }

                {
                    winner !== "" &&
                    <div className="result">
                        {winner === "Draw" ? "Draw !" : " The Winner is :  " + winner}
                        <br />
                        <button onClick={restart}>Restart </button>
                    </div>
                }

            </div>
        </div>
    );

};
export default Board;