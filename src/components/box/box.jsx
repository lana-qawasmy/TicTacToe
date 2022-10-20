import React from 'react';
import './box.css'
/**
 * 
 * @param {{
 * value:string
 * onClick: void();
 * }} props 
 * @returns 
 */
const Box = props => {
    const style = props.value === 'x' ? 'box x' : 'box o';
    return (
        <button className={style} onClick={props.onClick}>
            {
                props.value
            }
        </button>
    );
}

export default Box;
