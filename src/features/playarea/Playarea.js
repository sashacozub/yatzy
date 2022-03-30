import React, { useState } from 'react';

import './Playarea.css';

const allDice = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 1,
  },
  {
    id: 3,
    value: 1,
  },
  {
    id: 4,
    value: 1,
  },
  {
    id: 5,
    value: 1,
  },
];

const Playarea = () => {
  const [rolledDice, setRolledDice] = useState(allDice);
  const [savedDice, setSavedDice] = useState([]);

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  const rollDice = () => {
    let rolledResults = [0, 0, 0, 0, 0];

    for (let i = 1; i === rolledResults.length; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      rolledResults[i] = randomNumber;
    }

    if (attemptsLeft > 0) {
      setAttemptsLeft((prev) => prev - 1);
    } else {
      setAttemptsLeft(3);
      currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    }
  };

  const saveDice = (e) => {
    console.log(e.target);
  };

  return (
    <section className='playarea-ctr'>
      <h1>YATZY</h1>
      <h2>Player {currentPlayer}'s turn.</h2>
      <div className='roll-btn-area'>
        <button disabled={attemptsLeft === 0} onClick={rollDice}>
          Roll the dice!
        </button>
        <h4>{attemptsLeft} attempts left</h4>
      </div>
      <div className='dice-area'>
        <h5>Your roll:</h5>
        {rolledDice.map((dice) => {
          return <button onClick={saveDice}></button>;
        })}
      </div>
      <div className='saved-dice-area'>
        <h5>Saved dice:</h5>
      </div>
    </section>
  );
};

export default Playarea;
