import { useEffect, useState } from "react";

const Result = (props) => {
    const [color, setColor] = useState("#fff");
    const [name, setName] = useState('');
    useEffect(() => {
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    }, [props.count, name]);
    return (
        <div>
            <div>{
                <h1 style={{ color }}> you are win</h1>
            }
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

        </div>
    );
}
export default Result;