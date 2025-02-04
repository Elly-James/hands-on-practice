import React, { useState } from 'react';
import Movie from './Movie';
import NewMovieForm from './NewMovieForm'; // Changed name to avoid conflicts

function MovieCollection({ movies, onAddToMovies, onDeleteMovie, onAddMovie }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredAndSortedMovies = movies
    .filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortOrder === "asc" ? comparison : -comparison;
    });

  return (
    <div className='movie-collection'>
      <h2>Movie Collection</h2>
      <div className='filter-container'>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-select"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="movies-grid">
        {filteredAndSortedMovies.map(movie => (
          <Movie 
            key={movie.id} 
            movie={movie} 
            onAddToMovies={onAddToMovies} 
            onDeleteMovie={onDeleteMovie} 
          />
        ))}
      </div>
      <NewMovieForm onAddMovie={onAddMovie} />
    </div>
  );
}

export default MovieCollection;