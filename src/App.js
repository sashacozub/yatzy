import React, { useEffect } from 'react';

import './App.css';

import { getMovies } from './api/tmdb-local';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
