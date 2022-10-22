import { useState } from 'react';
import './board.css';

import Square from "./square.component";
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(""))
    const [isX, setIsX] = useState(true)

    
    const handleClick = (i) => { 
        if (calculateWinner()){
            return
        }
       squares[i] = isX ? 'x' : 'o'
        setSquares(squares)
        setIsX(!isX)
        
    }
function calculateWinner()
{
    const propabilityWinning =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0 ; i<propabilityWinning.length; i++)
    {
        const [a,b,c] = propabilityWinning[i]
        if(squares[a]=== squares[b]&&squares[a]===squares[c]){
        return squares[a]
        }
    }
    return null
}

const winner = calculateWinner()
let status

if (winner){
    status = `Winner: ${winner}`
}
else{
    status = `next player: ${isX ? 'x' : 'o'}`
}

const handleReset =() =>{
    setIsX(true);
    setSquares(Array(9).fill(""))
}
const render = (i) =>{
    return  <Square value={squares[i]} onClick={() => handleClick(i)} />
}



    return (
        <div className='container'>
            <div className='status'>{status}</div>
        <div className="board">
        
        {render(0)}
            {render(1)}
            {render(2)}
            {render(3)}
            {render(4)}
            {render(5)}
            {render(6)}
            {render(7)}
            {render(8)}

            </div>

            
            <button onClick={handleReset} className='reset'>Reset</button>
        </div>
    );
}

export default Board;