import React, { useState } from 'react';
import './board.css'

const Board = () => {

    const [cells, setCells] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState('X');

    const handleClick = (index) => {
        if (cells[index] !== "")
            return;

        const arr = [...cells];
        arr[index] = turn;
        setTurn(turn === 'X'? 'O' : 'X');
        setCells([...arr]);
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