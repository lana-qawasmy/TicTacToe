import React, { useState } from 'react';
import './score.css'

const Score = (props) => {
    return (
        <div className='score'>
            <span>X wins : {props.X}</span>
            <span>The Turn is to {props.turn}</span>
            <span>O wins : {props.O}</span>
        </div>
    );
}

export default Score;