import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDice } from './playareaSlice';

import './Playarea.css';

const Playarea = () => {
  const dice = useSelector((state) => state.playarea.dice);
  const dispatch = useDispatch();

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  const rollDice = () => {
    let newDice = dice.map((die) => {
      return { ...die };
    });

    console.log('old state: ', dice);

    for (let i = 0; i < newDice.length; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1;

      if (newDice[i].saved === false) {
        newDice[i].value = randomValue;
      }
    }

    dispatch(setDice(newDice));
  };

  const handleDiceSaving = ({ target }) => {
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].id === Number(target.id)) {
        let newDice = [...dice];
        newDice[i].saved = !newDice[i].saved;
        setDice(newDice);
      }
    }
  };

  const handlePlayerChange = () => {
    currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    setAttemptsLeft(3);
  };

  return (
    <section className='playarea-ctr'>
      <h1>YATZY</h1>
      <h2>Player {currentPlayer}'s turn.</h2>
      <div className='roll-btn-area'>
        <button disabled={attemptsLeft === 0} onClick={rollDice}>
          Roll the dice!
        </button>
        <button disabled={attemptsLeft > 0} onClick={handlePlayerChange}>
          Next player
        </button>
        <h4>{attemptsLeft} attempts left</h4>
      </div>
      <div className='dice-area'>
        <h5>Your roll:</h5>
        {dice.map((die) => {
          return (
            !die.saved && (
              <button key={die.id} id={die.id} onClick={handleDiceSaving}>
                {die.value}
              </button>
            )
          );
        })}
      </div>
      <div className='saved-dice-area'>
        <h5>Saved dice:</h5>
        {dice.map((die) => {
          return (
            die.saved && (
              <button key={die.id} id={die.id} onClick={handleDiceSaving}>
                {die.value}
              </button>
            )
          );
        })}
      </div>
    </section>
  );
};

export default Playarea;
