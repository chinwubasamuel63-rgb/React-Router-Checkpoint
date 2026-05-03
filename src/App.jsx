import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets.",
      posterURL:
        "https://media-cache.cinematerial.com/p/500x/0bzukbce/interception-movie-poster.jpg?v=1456314018",
      rating: 9,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
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
      <Routes>
        {/* Home Route: Shows Filter, Add Form, and List */}
        <Route
          path="/"
          element={
            <>
              <h1>🎬 Movie Watchlist</h1>
              <Filter
                setTitleFilter={setTitleFilter}
                setRateFilter={setRateFilter}
              />
              <AddMovie onAdd={handleAddMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />

        {/* Description Route: Shows the trailer and description */}
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
