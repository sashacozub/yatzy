import React, { useEffect, useState } from 'react';

import './App.css';

import { getMovies } from './api/tmdb-local';
import Header from './components/Header/Header';
import MovieSuggestion from './components/MovieSuggestion/MovieSuggestion';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    for (let i = 1; i <= 2; i++) {
      getMovies(i).then((response) =>
        setMoviesList((prev) => prev.concat(response))
      );
    }
  }, []);

  const getMovieFromList = () => {
    const randomNumber = Math.floor(Math.random() * moviesList.length);
    const randomMovie = moviesList[randomNumber];
    setCurrentMovie(randomMovie);
    console.log(randomNumber);
    console.log(randomMovie);
    console.log(currentMovie);
    setMoviesList(moviesList.filter((movie) => movie.id !== randomMovie.id));
  };

  return (
    <main>
      <Header />
      <button onClick={getMovieFromList}>random</button>
      <button onClick={() => console.log(moviesList)}>movies</button>
      {/* <MovieSuggestion movie={} /> */}
    </main>
  );
}

export default App;
