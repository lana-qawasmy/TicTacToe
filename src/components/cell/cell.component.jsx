import './cell.css'

const Cell = ({value, updateCell}) => {
    return (
        <div onClick={() => updateCell()} className={`cell-wrapper ${value}`}>
            <p>{value.toUpperCase()}</p>
        </div>
    )
}

export default Cell;