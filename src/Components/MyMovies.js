import React from "react";
import Movie from "./Movie";


// MyMovies.js
function MyMovies({ movies, onRemoveFromMovies, onDeleteMovie }) {
    return (
      <div className="my-movies">
        <h2>My Movies</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <Movie 
              key={movie.id} 
              movie={movie} 
              isInMovies={true} 
              onRemoveFromMovies={onRemoveFromMovies} 
              onDeleteMovie={onDeleteMovie} 
            />
          ))}
        </div>
      </div>
    );
  }
  

export default MyMovies;