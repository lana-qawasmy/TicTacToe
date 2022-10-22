import React from "react";
import"./restart.css";
const RestartButton= ({resetGame})=>
{
return(
    <div>
<button className="restartButton" onClick={resetGame}>reset</button>
    </div>
)
}
export default RestartButton;