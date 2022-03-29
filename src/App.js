import React from 'react';

import './App.css';

import Playarea from './features/playarea/Playarea';
import Scoreboard from './features/scoreboard/Scoreboard';

function App() {
  return (
    <main className='main-ctr'>
      <Playarea />
      <Scoreboard />
    </main>
  );
}

export default App;
