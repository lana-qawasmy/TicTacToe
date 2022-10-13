import './App.css';
import Board from './components/board/board.component';
import Score from './components/score/score.component';

function App() {
  return (
    <div className="App">
      <Score />
      <Board />
    </div>
  );
}

export default App;
