import React, { useState } from 'react';

// Reusable function for getting a random die value
const getRandomDieNumber = () => Math.floor(Math.random() * 6) + 1;

const DiceBoard = ({ dice, setDice, currentPlayer, setCurrentPlayer }) => {
  const [rollsLeft, setRollsLeft] = useState(3);

  // Roll all the dice on button press
  const rollDice = () => {
    if (rollsLeft !== 0) {
      setRollsLeft((prev) => prev - 1);
    }

    let tempDice = [...dice];

    for (let i = 0; i < tempDice.length; i++) {
      if (tempDice[i].saved === false) {
        tempDice[i].value = getRandomDieNumber();
      }
    }

    setDice(tempDice);
  };

  // Save or unsave any number of dice to NOT reroll
  const saveUnsaveDie = (e) => {
    let tempDice = [...dice];

    tempDice[e.target.id].saved = !tempDice[e.target.id].saved;

    setDice(tempDice);
  };

  // Switch to next player and reset all dice and amount of rolls left
  const switchToNextPlayer = () => {
    const tempDice = [...dice];

    for (let i = 0; i < tempDice.length; i++) {
      if (tempDice[i].saved === true) {
        tempDice[i].saved = false;
      }
    }

    setDice(tempDice);
    currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    setRollsLeft(3);
  };

  return (
    <div>
      <h2>Player {currentPlayer}'s turn</h2>
      <h2>Rolls left: {rollsLeft}</h2>
      <button disabled={rollsLeft === 0} onClick={rollDice}>
        Roll dice
      </button>
      <button onClick={switchToNextPlayer}>Next Player</button>
      <div>
        Unsaved dice:
        {rollsLeft < 3 &&
          dice.map((die) => {
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
};

export default DiceBoard;
