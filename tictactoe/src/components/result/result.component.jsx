import React, { useState } from 'react'
import './result.css'

const Result = (props) => {
  const [content , setContent] = useState (props.cells) ;
  const clear = () => {
    let tempContent = [...content] ;
    tempContent.forEach((element , index) => {
    tempContent[index] = '' ;
    });
    console.log ('temp' , tempContent) ;
    setContent (tempContent) ;
    props.onWin ('' , tempContent) ;
}

  return (
    <div className='result'>
      <div className='winnerBox'>{props.winner === 'draw' ? 'Draw' : `The winner is ${props.winner}`}</div>
      {/* <br /> */}
      <button onClick={clear}>Reset</button>
    </div>
  )
}

export default Result