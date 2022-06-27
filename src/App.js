import React, { useState } from 'react';

import './App.css';

const rolledDice = [
  { id: 0, value: 0, saved: false },
  { id: 1, value: 0, saved: false },
  { id: 2, value: 0, saved: false },
  { id: 3, value: 0, saved: false },
  { id: 4, value: 0, saved: false },
];

const getRandomDieNumber = () => Math.floor(Math.random() * 6) + 1;

function App() {
  const [dice, setDice] = useState(rolledDice);

  const rollDice = () => {
    let tempDice = [...dice];

    for (let i = 0; i < tempDice.length; i++) {
      if (tempDice[i].saved === false) {
        tempDice[i].value = getRandomDieNumber();
      }
    }

    console.log(tempDice);

    setDice(tempDice);
  };

  const saveUnsaveDie = (e) => {
    let tempDice = [...dice];

    tempDice[e.target.id].saved = !tempDice[e.target.id].saved;

    setDice(tempDice);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll dice</button>
      <div>
        Unsaved dice:
        {dice.map((die) => {
          if (die.saved === false) {
            return (
              <button key={die.id} id={die.id} onClick={saveUnsaveDie}>
                {die.value}
              </button>
            );
          } else return null;
        })}
      </div>
      <div>
        Saved dice:
        {dice.map((die) => {
          if (die.saved === true) {
            return (
              <button key={die.id} id={die.id} onClick={saveUnsaveDie}>
                {die.value}
              </button>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}

export default App;
