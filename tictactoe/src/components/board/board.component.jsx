import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './board.css' ;

const Board = (props) => {
    const [content , setContent] = useState (Array(9).fill('')) ;
    // const flip = (index) => {
    //     if (content[index] === '') {
    //         const newContent = [...content] ;
    //         newContent[index] = props.turn;
    //         props.onChange (props.turn === 'X' ? 'O' : 'X') ;
    //         setContent (newContent) ;
    //         console.log ('content' , content) ;
    //     }
    // }
    const [winner , setWinner] = useState ('none') ;
    const evaluate = () => {
        
        if (content[0] === content[1] && content[0] === content[2] && content[0] !== '')
            {setWinner (content[0]) ;}
        if (content[3] === content[4] && content[3] === content[5] && content[3] !== '')
            {setWinner (content[3]) ;}
        if (content[6] === content[7] && content[6] === content[8] && content[6] !== '')
            {setWinner (content[6]) ;}
        if (content[0] === content[3] && content[0] === content[6] && content[0] !== '')
            {setWinner (content[0]) ;}
        if (content[1] === content[4] && content[1] === content[7] && content[1] !== '')
            {setWinner (content[1]) ;}
        if (content[2] === content[5] && content[2] === content[8] && content[2] !== '')
            {setWinner (content[3]) ;}
        if (content[0] === content[4] && content[0] === content[8] && content[0] !== '')
            {setWinner (content[0]) ;}
        if (content[2] === content[4] && content[2] === content[6] && content[2] !== '')
            {setWinner (content[2]) ;}
        const thereIsEmptyCells = false ;
        content.forEach(element => {
            if (element === '')
                thereIsEmptyCells = true ;
        });
        setWinner (thereIsEmptyCells ? '' : 'draw') ;
        console.log ('current winner' , winner) ;
        return winner ;
    } 
    
  return (
    <div>
        <div className="infoBoard">
            <span>X wins : {props.winner.xWin}</span>
            <span>| </span>
            <span>O wins : {props.winner.oWin}</span>
            <span>| </span>
            <span>Turn : {props.turn}</span>
        </div>
        <div className="boardContent">
            {
                content.map ((item , index) => 
                <button key={index} onClick = {()=> {

                    if (item === '') {
                        const newContent = [...content] ;
                        newContent[index] = props.turn;
                        props.onChange (props.turn === 'X' ? 'O' : 'X') ;
                        setContent (newContent) ;
                        console.log ('content' , content) ;
                        props.onWin (() => evaluate) ;
                    }
                    // console.log ('current winner' , winner) ;
                } }
                className = {item == '' ? '' : 'filled'} 
                >{item} </button>
                )
            }
            {evaluate}
        </div>
    </div>
  )
}

export default Board;