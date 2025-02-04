import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import MovieCollection from './MovieCollection';
import MyMovies from './MyMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState(() => {



    //  creating a local storage for the movies being added


    const savedMovies = localStorage.getItem('myMovies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  //fetching the movies from the public api

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://imdb236.p.rapidapi.com/imdb/top250-movies', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '046849ca15mshf854ffc4ea606eap1f4b4ajsn3227a7cd7fbd',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch movies');

        const text = await response.text();
        const data = JSON.parse(text);
        
        const formattedMovies = data.map(movie => ({
          id: movie.id,
          title: movie.primaryTitle,
          releaseDate: movie.releaseDate,
          image: movie.primaryImage
        }));


        // Gettting the movies from local storage



        const customMovies = JSON.parse(localStorage.getItem('customMovies') || '[]');
        
        setMovies([...formattedMovies, ...customMovies]);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Saving the movies to local storage




  useEffect(() => {
    localStorage.setItem('myMovies', JSON.stringify(myMovies));
  }, [myMovies]);

  const addToMyMovies = (movie) => {
    if (!myMovies.find(m => m.id === movie.id)) {
      setMyMovies(prevMovies => [...prevMovies, movie]);
    }
  };

  const removeFromMyMovies = (id) => {
    setMyMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const deleteMovie = (id) => {
    setMovies(prevMovies => {
      const updatedMovies = prevMovies.filter(movie => movie.id !== id);



      // Updating movies in the local storage and in assumption that the ids of the movies start with tt


      const customMovies = updatedMovies.filter(movie => !movie.id.includes('tt')); 


      localStorage.setItem('customMovies', JSON.stringify(customMovies));
      return updatedMovies;
    });
    removeFromMyMovies(id);
  };

  const addMovie = (newMovie) => {
    const movieWithId = { ...newMovie, id: `custom-${Date.now()}` };
    setMovies(prevMovies => {
      const updatedMovies = [...prevMovies, movieWithId];


     
      const customMovies = updatedMovies.filter(movie => !movie.id.includes('tt'));
      localStorage.setItem('customMovies', JSON.stringify(customMovies));
      return updatedMovies;
    });
  };

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <MovieCollection 
              movies={movies} 
              onAddToMovies={addToMyMovies} 
              onDeleteMovie={deleteMovie} 
              onAddMovie={addMovie}
            />
          } 
        />
        <Route 
          path="/mymovies" 
          element={
            <MyMovies 
              movies={myMovies} 
              onRemoveFromMovies={removeFromMyMovies} 
              onDeleteMovie={deleteMovie} 
            />
          } 
        />
      </Routes>
    </>
  );
}

export default App;