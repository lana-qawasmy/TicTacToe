import './card.css';
import React from 'react';

const Card = (props) => {
  return (
    <div
      className={`card ${props.value}`}
      onClick={props.onClick}
      placeholder={props.placeholder}
    >
      {props.value === 'blank'? '': props.value}
    </div>
  );
};

export default Card;