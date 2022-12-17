import { useState } from 'react';
import './board.css';


const Board =(props)=>{

    const[turn, setTurn] = useState('X');
    const [board,setBoard]= useState(
        [
            ' ',' ',' ',
            ' ',' ',' ',
            ' ',' ',' '
        ]
        );
    const makeAction =(index)=>{
        if(board[index] ===' ')
        {
            if(turn === 'O')
                setTurn('X');
            else
                setTurn('O');
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            evaluation([...newBoard]);
        }
    };
    const evaluation =(board) =>{
        console.log(board);
        if(board[0]===board[1]&& board[1]===board[2] && board[0]!==' ')
        {
            
            Rs(false);
        }
        if(board[3]===board[4] && board[4]===board[5] && board[3]!==' ')
        {
            
            Rs(false);
        }
        if(board[6]===board[7] && board[7]===board[8] && board[6]!==' ')
        {
            
            Rs(false);
        }
        if(board[0]===board[3] && board[3]===board[6] && board[0]!==' ')
        {
            
            Rs(false);
        }
        if(board[1]===board[4] && board[4]===board[7] && board[1]!==' ')
        {
            
            Rs(false);
        }
        if(board[2]===board[5] && board[5]===board[8] && board[2]!==' ')
        {
            
            Rs(false);
        }
        if(board[0]===board[4] && board[4]===board[8] && board[0]!==' ')
        {
            Rs(false);
        }
        if(board[2]===board[4] && board[4]===board[6] && board[2]!==' ')
        {
            Rs(false);
        }
        const isnotdraw= board.includes(' ');
        if(isnotdraw === false){
            Rs(true);
        }
    };

    const Rs = (draw) =>{
        if(draw=== false){
            if(turn === 'X'){
                const p1= props.p1 + 1;
                props.setP1(p1);
            }else if(turn === 'O'){
                const p2= props.p2 + 1;
                props.setP2(p2);
            }
        }else{
            const draw = props.draw + 1;
            props.setDraw(draw);
        }
        const defboard =         [
            ' ',' ',' ',
            ' ',' ',' ',
            ' ',' ',' '
        ];
        setBoard(defboard);

        setTurn('X')
    };
    return (
        <div className='board-container'>
            <div className='board-row'>
                <button className='card' onClick={() => makeAction(0)}>{board[0]}</button>
                <button className='card' onClick={() => makeAction(3)}>{board[3]}</button>
                <button className='card' onClick={() => makeAction(6)}>{board[6]}</button>
            </div>
            <div className='board-row'>
                <button className='card' onClick={() => makeAction(1)}>{board[1]}</button>
                <button className='card' onClick={() => makeAction(4)}>{board[4]}</button>
                <button className='card' onClick={() => makeAction(7)}>{board[7]}</button>
            </div>
            <div className='board-row'>
                <button className='card' onClick={() => makeAction(2)}>{board[2]}</button>
                <button className='card' onClick={() => makeAction(5)}>{board[5]}</button>
                <button className='card' onClick={() => makeAction(8)}>{board[8]}</button>
            </div>
        </div>
    );
};

export default Board;