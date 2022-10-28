import { useState } from 'react';
import Square from '../squre/square';

const Board = ({ squares, onClick }) => {
    // const[turn,setTurn]=useState("x");
    // const[win,setWin]=useState('');
    // const[arr,setArr]=useState(Array(9).fill(''));
    return (
        <div className="board">
           
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
               
            ))}


        </div>
    );
};
export default Board;