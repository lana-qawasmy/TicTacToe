import './App.css';
import { useState } from 'react';

function App() {
    const [boardVals, setBoardVals] = useState(Array(9).fill("n")); // n : none
    const [turn, setTurn] = useState("X");

    const clickCard = (index) => {
        if(boardVals[index] !== 'n') return
        const newVals = [...boardVals];
        newVals[index] = turn;
        console.log('newVals', newVals);
        setBoardVals(newVals);
        setTurn(t => t === 'X' ? 'O' : 'X');
    };

    return (
        <div className="App">
            <div className='board'>
                {
                    boardVals.map((item, index) => {
                        return (
                            <div
                                className={`card ${item}`}
                                key={index}
                                onClick={() => clickCard(index)}
                            >
                                {item !== 'n' ? item : ''}
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default App;