import { useState } from "react";
import './bord.css';

const Bord = () => {
    const [score, setScore] = useState({ X: 0, O: 0 });
    const [winner, setWinner] = useState("");
    const [turn, setTurn] = useState("X");
    const [cell, setCell] = useState(Array(9).fill(""));

    const onSelect = (index) => {
        if (cell[index] !== "") {
            return;
        }

        const newCell = [...cell];
        newCell[index] = turn;
        setCell(newCell);
        setTurn(turns => (turns === "X" ? "O" : "X"));

        const result = detectWinner(newCell);
        if (result) {
            setWinner(result);
            if (result !== 'draw') {
                setScore({
                    ...score,
                    [result]: score[result] + 1
                })
            }
        }
    }

    const detectWinner = (cells) => {
        if (cells[0] !== "" && cells[0] === cells[1] && cells[1] === cells[2]) {
            return cells[0];
        }
        if (cells[3] !== "" && cells[3] === cells[4] && cells[4] === cells[5]) {
            return cells[3];
        }
        if (cells[6] !== "" && cells[6] === cells[7] && cells[7] === cells[8]) {
            return cells[6];
        }
        if (cells[0] !== "" && cells[0] === cells[3] && !cells[3] === cells[6]) {
            return cells[0];
        }
        if (cells[1] !== "" && cells[1] === cells[4] && cells[4] === cells[7]) {
            return cells[1];

        }
        if (cells[2] !== "" && cells[2] === cells[5] && cells[5] === cells[8]) {
            return cells[2];

        }
        if (cells[0] !== "" && cells[0] === cells[3] && cells[3] === cells[6]) {
            return cells[0];

        }
        if (cells[1] !== "" && cells[1] === cells[4] && cells[4] === cells[7]) {
            return cells[1];

        }
        if (cells[2] !== "" && cells[2] === cells[5] && cells[5] === cells[8]) {
            return cells[2];

        }
        if (cells[0] !== "" && cells[0] === cells[4] && cells[4] === cells[8]) {
            return cells[0];
        }
        if (cells[2] !== "" && cells[2] === cells[4] && cells[4] === cells[6]) {
            return cells[2];

        }
        if (cells.filter(cell => !Boolean(cell)).length > 0) {
            return undefined;
        } else {
            return "draw"
        }
    }
    const restart = () => {
        setCell(Array(9).fill(""));
        setTurn("X");
        setWinner("");
    };

    return (
        <div>
            <div className='header'>
                <h3>X: {score.X}</h3>
                <h3>O: {score.O}</h3>
                <h3>Turn: {turn}</h3>
            </div>
            <div className="bord">
                {
                    cell.map((cells, index) => <div className={`cells ${cells}`} onClick={() => onSelect(index)} key={index}>{cells}</div>)
                }
                {
                    (winner) && (
                        <div className="result">
                            {winner === 'draw' ? <p>Draw</p> : <p>{winner} Is Winner</p>}
                            <button className="restart" onClick={restart}>Restart</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Bord;