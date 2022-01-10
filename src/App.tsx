import {useState} from 'react';

import './App.css';
import Grid from './components/Grid/Grid';

function App() {
  const [gameCount, setGameCount] = useState(0);

  const handleNewGame = () => {
		setGameCount(gameCount + 1);
	}

  return (
    <div className="App">
      <h1 className="title">
        GAME {gameCount}
      </h1>
      <div className="container">
        <Grid gameCount={gameCount} />
      </div>
      <div className="newGameBtn" onClick={() => handleNewGame()}>
        NEW GAME (1 VS 1)
      </div>
    </div>
  );
}

export default App;
