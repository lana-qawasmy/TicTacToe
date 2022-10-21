import './card.css';

const Card = (props) => {
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