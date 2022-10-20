import React from 'react';
import Box from '../box/box';
import './board.css'
/**
 * 
 * @param {{
 * board:string[];
 * onClick: void();
 * }} props 
 * @returns 
 */
const Board = props => {
    return (
        <div className='board'>
            {
                props.board.map((value, index) => {
                    return (<Box key={value + index} value={value} onClick={() => value === '' && props.onClick(index)} />);
                })
            }
        </div>
    );
}

export default Board;
