import React from 'react'
import "./scoreboard.css"


export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <div className='wrapper'>

        <div className='x-score'>
            <span  className={`score x-score ${!xPlaying && "inactive"}`}>player A:: {xScore}</span>
        </div>

        <div className='o-score'>
            <span className={`score o-score ${xPlaying && "inactive"}`}>player B :: {oScore}</span>
        </div>
      </div>
    </div>
  )
}