
import React from 'react';
import "./reset.css";

export const Reset = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset !</button>
    )
}