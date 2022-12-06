import { useState } from 'react';
import React from 'react'
import './result.css'

const Result = (props) => {
    const [content , setContent] = useState (props.blockGame) ;
    const clear = () => {
      let tempContent = [...content] ;
      tempContent.forEach((element , index) => {
      tempContent[index] = '' ;
      });
      setContent (tempContent) ;
      props.onWin ('' , tempContent) ;
  }
  
  return (
    <div className="result">
        <div className="result-group">
           <div>The Winner is : {props.winner}</div>
            <button onClick={clear}>Reset</button>
        </div>
    </div>
  )
}

export default Result
