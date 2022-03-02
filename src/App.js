import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    console.log(randomNumber);
    setMoviesList(moviesList.filter((movie) => movie.id !== randomMovie.id));
    console.log(randomMovie);
    setCurrentMovie(randomMovie);
    // return randomMovie;
  };

  return (
    <main>
      <Header />
      {/* <button onClick={getMovieFromList}>random</button>
      <button onClick={() => console.log(moviesList)}>movies</button>
      <button onClick={() => console.log(currentMovie)}>what is current</button> */}
      {/* <MovieSuggestion movie={} /> */}
      <motion.button
        className='start-btn'
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}>
        HELLO
      </motion.button>
    </main>
  );
}

export default App;
