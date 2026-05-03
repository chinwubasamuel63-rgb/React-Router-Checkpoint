import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-card-info">
          <h2>{movie.title}</h2>
          <div>Rating: <span className="rating-tag">{movie.rating}/10</span></div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard