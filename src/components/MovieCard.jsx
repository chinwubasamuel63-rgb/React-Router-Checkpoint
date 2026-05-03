const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-card-info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <div>
          Rating: <span className="rating-tag">{movie.rating}/10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard