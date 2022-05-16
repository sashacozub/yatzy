import React, { useState } from 'react';

import './App.css';

const rolledDice = [
  { id: 0, value: 0, saved: false },
  { id: 1, value: 0, saved: false },
  { id: 2, value: 0, saved: false },
  { id: 3, value: 0, saved: false },
  { id: 4, value: 0, saved: false },
];

function App() {
  const [dice, setDice] = useState(rolledDice);

  return (
    <div>
      <button>Roll dice</button>
      <div>
        {dice.map((die) => {
          return <button key={die.id}>{die.value}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
