import './App.css';

import { getMovies } from './api/tmdb-local';
function App() {
  return <div>{getMovies()}</div>;
}

export default App;
