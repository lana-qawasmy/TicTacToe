import React from 'react'

import { Cell } from '../cell/cell.component'
import "./board.css"

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <Cell value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}