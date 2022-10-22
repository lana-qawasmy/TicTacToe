import './header.css'

const Header = ({x, o, setWins}) => {
    return <div className='header'>
        <div>
            <p className='x'>X Wins: {x}</p>
            <p className='o'>O Wins: {o}</p>
        </div>
        <button onClick={() =>{setWins({x: 0, o: 0})}}>RESET</button>
    </div>
}

export default Header;