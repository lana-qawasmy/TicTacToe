import './card.css';
import { useState } from 'react';

const Card = (props) => {
  const [value] = useState(props.value);
  return (
    <div
      className={`card ${props.value}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Card;