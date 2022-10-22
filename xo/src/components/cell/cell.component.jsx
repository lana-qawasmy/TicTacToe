
import "./cell.css";

export const Cell = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}