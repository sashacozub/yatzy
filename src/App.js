import React from 'react';

import './App.css';

import Playarea from './features/playarea/Playarea';
import Scoreboard from './features/scoreboard/Scoreboard';

function App() {
  return (
    <main className='main-ctr'>
      <div className='main-ctr-divider'>
        <Playarea />
      </div>
      <Scoreboard />
    </main>
  );
}

export default App;
