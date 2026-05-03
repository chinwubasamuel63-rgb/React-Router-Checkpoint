import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the movie that matches the ID in the URL
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        Back to Home
      </button>
      
      <h1>{movie.title}</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto' }}>
        {movie.description}
      </p>

      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;