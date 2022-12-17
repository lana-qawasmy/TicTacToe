import './header.css';


const Header =(props) =>{


    return (
        <div className='header-container'>
            <div className='score-wrap'>
            <span>P1: {props.p1}</span>
            <span>Draw: {props.draw}</span>
            <span>P2: {props.p2}</span> 
            </div>
        </div>
    );

};

export default Header;