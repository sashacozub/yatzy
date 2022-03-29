import React from 'react';
import { useSelector } from 'react-redux';

import './Scoreboard.css';

import { rows } from './scoreTable';

const Scoreboard = () => {
  const score = useSelector((state) => state.scoreboard.scoreboard);

  return (
    <section className='scoreboard-ctr'>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Combination</th>
            <th>Points</th>
            <th>Player 1</th>
            <th>Player 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.displayName}</td>
                <td>{row.points}</td>
                <td>{score.playerOne.combinations[row.combination]}</td>
                <td>{score.playerTwo.combinations[row.combination]}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={2}>TOTAL:</td>
            <td>{score.playerOne.currentScore}</td>
            <td>{score.playerTwo.currentScore}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Scoreboard;
