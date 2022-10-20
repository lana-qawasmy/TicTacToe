import React from 'react';
import './result.css'
/**
 * 
 * @param {{
 * xScore:int;
 * oScore:int;
 * }} props 
 * @returns 
 */
const Result = props => {
    return (
        <div className='result-header'>
            <div className='result-box'>
                <span className='xScore'><b>X:</b> {props.xScore}  </span>
                <span className='oScore'><b>O:</b> {props.oScore} </span>
            </div>
        </div>
    );
}

export default Result;
