import { useEffect, useState } from "react";
import Result from "../result/result";

const First = (props) => {
    const [c, setC] = useState(0);
    useEffect(()=>{
      alert("Hello woooorld!");
    },[])
    return (
        <div>
            <h2>{c}</h2>
            <button onClick={() => setC(c + 1)}>+1</button>
            <Result count={c}/>
        </div>
    );
}
export default First;