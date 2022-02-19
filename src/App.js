import React, { useEffect } from 'react';

import './App.css';

import { getMovies } from './api/tmdb-local';

function App() {
  useEffect(() => {
    getMovies();
  }, []);

  return <div></div>;
}

export default App;
