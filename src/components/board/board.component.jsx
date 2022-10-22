import { useState } from 'react';
import './board.css'
import Cell from '../cell/cell.component';
import Header from '../header/header.component';

const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(''))
    const [turn, setTurn] = useState(0);
    const [wins, setWins] = useState({x: 0, o: 0})

    const addWin = (player) => {
        if (player) setWins((value) => ({...value, o: value.o + 1}))
        else setWins((value) => ({...value, x: value.x + 1}))
    }

    const resetData = () => {
        setCells(Array(9).fill(''))
        setTurn(0)
    }

    const evaluate = () => {
        const evaluateVertical = () => {
            let last = ['', '', ''];
            for (let i = 0; i < 9; i++) {
                if (cells[i] == '') {
                    last[i%3] = 'n'
                } else if (last[i%3] === '') last[i%3] = cells[i];
                else if (last[i%3] !== cells[i]) last[i%3] = 'n'
            }
            for (let i = 0; i < last.length; i++) {
                if (last[i] == 'x' || last[i] == 'o') return last[i];
            }
        }
        const evaluateHorizantal = () => {
            let last = ['', '', ''];
            for (let i = 0; i < 9; i++) {
                if (cells[i] == '') {
                    last[parseInt(i/3)] = 'n'
                } else if (last[parseInt(i/3)] === '') last[parseInt(i/3)] = cells[i];
                else if (last[parseInt(i/3)] !== cells[i]) last[parseInt(i/3)] = 'n'
            }
            for (let i = 0; i < last.length; i++) {
                if (last[i] == 'x' || last[i] == 'o') return last[i];
            }
        }
        const evaluateCross = () => {
            if (cells[0] == cells[4] && cells[4] == cells[8]) {
                return cells[0];
            } else if (cells[2] == cells[4] && cells[4] == cells[6]) {
                return cells[2];
            }
            return null;
        }
        let horizantal = evaluateHorizantal();
        let vertical = evaluateVertical();
        let cross = evaluateCross();
        let winner;
        if (horizantal != null) {
            winner = horizantal
        }
        if (vertical != null) {
            winner = vertical
        }
        if (cross != null && cross != '') {
            winner = cross
        }
        if (winner == null && cells.filter(cell => cell === '').length == 0) return 'draw'
        return winner;
    }

    const resetGame = () => {
        let winner = evaluate();
        if (winner != null) {
            setCells(Array(9).fill(''))
            setTurn(0)
            if (winner == 'x') {
                addWin(0)
            } else if (winner == 'o') {
                addWin(1)
            }
        }
        document.querySelector('.wrapper .winner-wrapper').remove()
        document.querySelector('.wrapper .winner-wrapper').remove()
    }

    const updateCell = (index) => {
        if (cells[index] != '') return;
        const newCells = [...cells];
        newCells[index] = turn? 'o' : 'x'
        setTurn((turn + 1)%2)
        setCells(newCells)
    }

    let winner = evaluate();

    if (winner != null) {
        const getWinnerElement = () => {
            let winner_wrapper = document.createElement('div'),
            winner_button = document.createElement('button');
            
            winner_wrapper.innerText = `${winner == `draw`? `IT'S A DRAW!` : `${winner == 'o'? `O` : `X`} Won!`}`
            winner_button.innerText = 'PLAY AGAIN!'
    
            winner_wrapper.classList.add('winner-wrapper')

            winner_button.onclick = resetGame;
            winner_wrapper.appendChild(winner_button);
            return winner_wrapper;
        }
        document.querySelector('.wrapper').appendChild(getWinnerElement())
    }

    return (
        <div className='wrapper'>
            <Header x={wins.x} o={wins.o} setWins={setWins}></Header>
            <div className='board-wrapper'>
                {cells.map((cell, i) => <Cell value={cell} index={i} updateCell={() => {
                    updateCell(i)
                }}/>)}
            </div>
        </div>
    )
}

export default Board;