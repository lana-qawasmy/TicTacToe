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
    
  return (
    <div>
        <div className="infoBoard">
            <span></span>
            <span></span>
            <span></span>
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
                    }
                } }
                >{item} </button>
                )
            }
        </div>
    </div>
  )
}

export default Board