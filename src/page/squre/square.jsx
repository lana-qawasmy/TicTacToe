
const Square =({value,onClick})=>{
    const style = value ?`squares ${value}`:`squares`;
    console.log(value);
    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
};
export default Square