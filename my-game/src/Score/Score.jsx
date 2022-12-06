// import React from 'react'
import './score.css'
const Score = (props) => {

  return (
<div className="score-row">
    <div>Score X : {props.X}</div>
    {console.log("----" + props.X)}
    <div>Score O : {props.O}</div>
    <div>Turn : {props.turn}</div>
</div>
  )
}

export default Score
