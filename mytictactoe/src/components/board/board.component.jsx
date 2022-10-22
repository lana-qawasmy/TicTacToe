import React from "react";
import "./board.css";
import CardBox from "../cardBox/cardBoxs.component";

const Board =({board,onClick})=>{

    return(
        <div className="board">
            { 
          board.map((value,indx)=>{
                return <CardBox  key={value+indx} value ={value} onClick={()=> value===null && onClick(indx)} />

            }
                )
                }
 
        </div>
    )
}
export default Board;