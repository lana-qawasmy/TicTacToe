import React, { useState } from 'react';
import './board.css'

/**
 * 
 * @param {
 *      onWinning(value: string) => string;
 * } props 
 */
const Board = (props) => {

    const [cells, setCells] = useState(Array(9).fill(""));

    const handleClick = (index) => {
        if (cells[index] !== '')
            return;

        const arr = [...cells];
        arr[index] = props.turn;
        console.log(props.turn);
        props.setTurn(props.turn);
        setCells(arr);
        let winner = checkWinner(arr);
        if(winner !== '')
            props.onWinning(winner);
    }

    const checkWinner = (arr) => {
        // Check the rows 
        for (let j = 0; j < 3; j++) {
            let X = 0, O = 0;
            for (let i = 0; i < 3; i++) {
                X += (arr[3 * j + i] === 'X');
                O += (arr[3 * j + i] === 'O');
            }
            if (X === 3)
                return 'X';
            else if (O === 3)
                return 'O';
        }
        // Check the columns
        for (let j = 0; j < 3; j++) {
            let X = 0, O = 0;
            for (let i = 0; i < 3; i++) {
                X += (arr[j + 3 * i] === 'X');
                O += (arr[j + 3 * i] === 'O');
            }
            if (X === 3)
                return 'X';
            else if (O === 3)
                return 'O';
        }
        // Check the main diagonal 
        let X = 0, O = 0;
        for (let i = 0; i <= 8; i += 4) {
            X += (arr[i] === 'X');
            O += (arr[i] === 'O');
        }
        if (X === 3)
            return 'X';
        else if (O === 3)
            return 'O';
        // Check the reverse diagonal
        X = O = 0;
        for (let i = 2; i <= 6; i += 2) {
            X += (arr[i] === 'X');
            O += (arr[i] === 'O');
        }
        if (X === 3)
            return 'X';
        else if (O === 3)
            return 'O';

        // Check the Draw
        let a = arr.filter((item) => item === '');
        if(a.length)
            return '';
        else
            return 'Draw';
    }

    return (
        <div className='board'>
            {
                cells.map((element, index) =>
                    <div className={`cell ${element}`} key={index} onClick={() => handleClick(index)}>
                        {element}
                    </div>
                )
            }
        </div>
    );

}

export default Board;