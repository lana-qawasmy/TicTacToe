import React from "react";
import "./cardBox.css";

const CardBox = ({ value, onClick }) => {

    const style = value === "X" ? "box x " : " box o";
    return (
        <div>
            <button className={style} onClick={onClick} >
             
                    {value}
             
            </button>
        </div>
    );
};
export default CardBox;