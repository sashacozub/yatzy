import React from 'react';
import { useSelector } from 'react-redux';

import './Scoreboard.css';

import { scoreTable } from './scoreTable';

const Scoreboard = () => {
  const score = useSelector((state) => state.scoreboard.scoreboard.scoreTable);

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
          {score.map((combo) => {
            return (
              <tr key={combo.id}>
                <td>{combo.displayName}</td>
                <td>{combo.pointsInfo}</td>
                <td>
                  <button>{combo.playerOne.score}</button>
                </td>
                <td>
                  <button>{combo.playerTwo.score}</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={2}>TOTAL:</td>
            <td>
              {score
                .map((combo) => combo.playerOne.score)
                .reduce((a, b) => a + b)}
            </td>
            <td>
              {score
                .map((combo) => combo.playerTwo.score)
                .reduce((a, b) => a + b)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Scoreboard;
