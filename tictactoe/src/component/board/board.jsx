import Boxes from "./boxes";
import { useState } from "react";
import EndGame from "../endGame/EndGame";
// import EndGame from "../EndGame";


const INITIAL = "";
const X_play = "X";
const O_play = "O";
const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const Board = () => {

    const [box, setBox] = useState(Array(9).fill(INITIAL));
    const [X, setX] = useState(false);
    const [finish, setfinish] = useState(false);
    const [drow, setDrow] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 })
    const isGameOver = () => {
        if (!finish) {

            //check if X is win

            for (let i = 0; i < 8; i++) {
                if (
                    box[winCases[i][0]] === X_play &&
                    box[winCases[i][1]] === X_play &&
                    box[winCases[i][2]] === X_play
                ) {
                    setfinish(true);
                    setwinCount({ ...winCount, X: winCount.X + 1 });
                    console.log("X win");
                    return;
                }
            }


            //check if O is win

            for (let i = 0; i < 8; i++) {
                if (
                    box[winCases[i][0]] === O_play &&
                    box[winCases[i][1]] === O_play &&
                    box[winCases[i][2]] === O_play
                ) {
                    setfinish(true);
                    setwinCount({ ...winCount, O: winCount.O + 1 });
                    console.log("O win");
                    return;
                }
            }


            if (!box.includes(INITIAL)) {
                setDrow(true);
                setfinish(true);
                console.log("Draw");

            }
        }
    }

    const restartGame = () => {
        setBox(Array(9).fill(INITIAL));
        setDrow(false);
        setfinish(false);
    }

    const ClearCounter = () => {
        setwinCount({ X: 0, O: 0 });
        restartGame();
    }

    isGameOver();

    const HnadleClick = (props) => {
        console.log("handle Click is work ! ");

        setBox(
            box.map((item, index) => {
                if (index === props) {
                    if (X) {
                        return X_play;
                    }

                    else
                        return O_play;
                }

                else {
                    return item;
                };

            }))
        setX(!X);
    };

    return (
        <div >
            <span className='win-count'>
                X : {winCount.X}
                <br />
                O : {winCount.O}
            </span>

            {finish && <EndGame winCount={winCount}
                restartGame={restartGame}
                player={X} drow={drow}
                ClearCounter={ClearCounter}
            />}

        
            <Boxes clickedArray={box} HnadleClick={HnadleClick} />

        </div>
    );

};
export default Board;