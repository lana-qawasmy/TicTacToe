import { useState } from "react";
import "./bored.css"


const Bored = () => {

    const [cell, Setcell] = useState(Array(9).fill(""));

    const [turn, Setturn] = useState("X");
    const [addo, Setaddo] = useState(0);
    const [addx, Setaddx] = useState(0);
    const [inc, Setinc] = useState(0);
    const [winer, Setwin] = useState("");


    const handleClick = () => {
        const res = Array(9).fill("")
        console.log(res)
        Setcell(res);
        Setturn("X")
        Setwin("")
        Setinc(0);


    }
    


    const Setval = (index) => {
        const cellarray = [...cell];
        cellarray[index] = turn;
        console.log(cellarray)
        if (cell[index] !== "")
            return;
        else {
            if (turn === "X")
                Setturn("O");
            else
                Setturn("X");

        }






        Setcell(cellarray);
        const result = win(cellarray);
        Setwin(result);

       
            if (result === "O")
           Setaddo(addo + 1)
            if (result === "X")
                Setaddx(addo+1)
                console.log(addx);
        

    }
    console.log(addo)
    const win = (xo) => {
        Setinc(inc + 1);

        if (xo[0] === xo[1] && xo[1] === xo[2]) return xo[1];
        if (xo[3] === xo[4] && xo[4] === xo[5]) return xo[4];
        if (xo[6] === xo[7] && xo[7] === xo[8]) return xo[7];


        if (xo[0] === xo[3] && xo[3] === xo[6]) return xo[3];
        if (xo[1] === xo[4] && xo[4] === xo[7]) return xo[4];
        if (xo[2] === xo[5] && xo[5] === xo[8]) return xo[5];



        if (xo[0] === xo[4] && xo[4] === xo[8]) return xo[4];
        if (xo[2] === xo[4] && xo[4] === xo[6]) return xo[4];

        else if (inc === 8)
            return "DRwa";





    }

    

    return (
        <div>
            <div className="flex">
                <span >Turn:{turn}</span>
                <span >Wins of X : {addx} </span>
                <span >Wins of O : {addo} </span>

            </div>
            <div className="wrap">{
                cell.map((val, index) => {

                    return <div className={`div1 ${val === "X" ? "o" : "x"} hov`} key={index} onClick={() => Setval(index) }  >{val}</div>


                })}

                <div className={`  ${winer === "X" ? "XCSS" : ""} ${winer === "O" ? "OCSS" : ""} ${winer === "DRwa" ? "DCSS" : ""}`}>

                    {winer !== "" ? <span className="winner"> {winer !== "DRwa" ? "The winner is " + winer : "its DRwa"} <br /> <button className={`reset `} onClick={handleClick}>Reset</button></span> : ""}

                </div>
            </div>

        </div>

    )

}
export default Bored;