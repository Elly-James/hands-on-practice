
// Movie.js
import React from 'react';

function Movie({ movie, onAddToMovies, onDeleteMovie, isInMovies, onRemoveFromMovies }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      {isInMovies ? (
        <button onClick={() => onRemoveFromMovies(movie.id)}>Remove from My Movies</button>
      ) : (
        <button onClick={() => onAddToMovies(movie)}>Add to My Movies</button>
      )}
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </div>
  );
}


export default Movie;