import './main.css';
import Board from '../../components/board/board.component';
import Header from '../../components/header/header.component';
import { useState } from 'react';

const MainPage=()=>{
    
const [p1,setP1] = useState(0);
const [p2,setP2] = useState(0);
const [draw,setDraw] = useState(0);

    return (
        <div className='main-container'>
            <Header p1={p1} 
            draw={draw}
            p2={p2} />
            <Board setP1 ={setP1} 
            setDraw = {setDraw} 
            setP2={setP2}
            p1={p1}
            draw={draw}
            p2={p2}
            />
            <div>
                <a href='http://localhost:3000/'>
                    &#127479;&#127466;&#127480;&#127481;&#127462;&#127479;&#127481;
                </a>
            </div>
        </div>
    );
};

export default MainPage;