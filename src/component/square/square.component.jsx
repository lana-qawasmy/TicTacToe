import './square.css';

const Square = ({value, playTurn}) =>{
    return(
        <div className='square' onClick={playTurn}>
            {value}
        </div>
    );
}

export default Square;