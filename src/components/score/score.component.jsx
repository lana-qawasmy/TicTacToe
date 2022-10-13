import React, { useState } from 'react';
import './score.css'

const Score = () => {

    const [cells, setCells] = useState(Array(9).fill(""));

    return (
        <div className='score'>
            Hello 
        </div>
    );
}

export default Score;