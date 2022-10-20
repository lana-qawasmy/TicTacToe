import { useEffect, useState } from 'react';
import './board.css';
import Square from '../square/square.component';

const Game = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [player, setPlayer] = useState("X");
    const [result, setResult] = useState({ winner: "none", state: "none", });
    const [Owins, setOwins] = useState(0);
    const [Xwins, setXwins] = useState(0);

    useEffect(() => {
        isWinner();
        noWinner();
    }, [board]);

    useEffect(() => {
        if (result.state == 'no winner')
            alert('there is no winner')
        else if (result.state != "none")
            alert(`${result.winner} is the winner`)
    }, [result]);

    const pattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const playTurn = (index) => {
        setBoard(board.map((value, item) => {
            if (item == index && value == '')
                return player;
            return value;
        }));
        if (board[index] == '') {
            if (player == 'X')
                setPlayer('O');
            else
                setPlayer('X');
        }
    };

    const isWinner = () => {
        pattern.forEach((currentPattern) => {
            const playerX = board[currentPattern[0]];
            if (playerX == '') return;
            let someoneWon = true;
            currentPattern.forEach(index => {
                if (board[index] != playerX) {
                    someoneWon = false;
                };
            });
            if (someoneWon) {
                if (player == 'X') {
                    setResult({ winner: 'O', state: 'won' });
                    setOwins(Owins + 1);
                }
                else {
                    setResult({ winner: 'X', state: 'won' });
                    setXwins(Xwins + 1);

                } clearBoard();
            };
        });
    };

    const noWinner = () => {
        let isFilled = true;
        // for (let i = 0; i < 9; ++i) {
        //     if (board[i] == '')
        //         isFilled = false;
        // }
        board.forEach((square) => {
            if (square == '') {
                isFilled = false;
            }

        });
        if (isFilled) {
            setResult({ winner: 'no one', state: 'no winner' });
            clearBoard();
        };
    };

    const clearBoard = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setPlayer('X');
    }
    return (
        <div className='game'>
            <div className='board'>
                <h1>tic tac toe game!</h1>
                <div className='header'>
                    <span>
                    turn: {player}
                </span>
                    <span>
                        X won {Xwins} times
                    </span>
                    <span>O won {Owins} times</span></div>
                <div className='row'>
                    <Square
                        value={board[0]}
                        playTurn={() => { playTurn(0); }}
                    />
                    <Square
                        value={board[1]}
                        playTurn={() => { playTurn(1); }}
                    />
                    <Square
                        value={board[2]}
                        playTurn={() => { playTurn(2); }}
                    />
                </div>
                <div className='row'>
                    <Square
                        value={board[3]}
                        playTurn={() => { playTurn(3); }}
                    />
                    <Square
                        value={board[4]}
                        playTurn={() => { playTurn(4); }}
                    />
                    <Square
                        value={board[5]}
                        playTurn={() => { playTurn(5); }}
                    />
                </div>
                <div className='row'>
                    <Square
                        value={board[6]}
                        playTurn={() => { playTurn(6); }}
                    />
                    <Square
                        value={board[7]}
                        playTurn={() => { playTurn(7); }}
                    />
                    <Square
                        value={board[8]}
                        playTurn={() => { playTurn(8); }}
                    />
                </div>
                <button type='button' onClick={() => { clearBoard() }}>clear</button>
            </div>
        </div>
    )
}

export default Game;