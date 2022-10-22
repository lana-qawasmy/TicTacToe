import './cell.css';



/**
 * 
 * @param {{
 * value: character
 * }} props
 * @returns
 */
const Cell = (props) =>{
    const content = (props.value === 'x') ? 'X' : 'O'; 
}

export default Cell;