import React from "react";
import "./fscore.css";
const Fscore = ({ scores, turn }) => {
    const { xScore, oScore } = scores;



    return (
        <div className="scoreBoared">
            <span className={`score x-score ${!turn && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${turn && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}
export default Fscore;