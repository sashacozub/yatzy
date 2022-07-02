import React, { useState } from 'react';

import './App.css';

import DiceBoard from './components/DiceBoard/DiceBoard';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const rolledDice = [
  { id: 0, value: 0, saved: false },
  { id: 1, value: 0, saved: false },
  { id: 2, value: 0, saved: false },
  { id: 3, value: 0, saved: false },
  { id: 4, value: 0, saved: false },
];

function App() {
  const [dice, setDice] = useState(rolledDice);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  return (
    <main>
      <DiceBoard
        dice={dice}
        setDice={setDice}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <ScoreBoard />
    </main>
  );
}

export default App;
