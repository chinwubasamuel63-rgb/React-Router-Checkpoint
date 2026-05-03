// src/App.jsx
import { useState } from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets.",
      posterURL: "https://media-cache.cinematerial.com/p/500x/0bzukbce/interception-movie-poster.jpg?v=1456314018",
      rating: 9
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
    );
  });

  return (
    <div className="App">
      <h1>🎬 Movie Watchlist</h1>
      
      <div className="controls">
        <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
        <AddMovie onAdd={handleAddMovie} />
      </div>
      
      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default App