import React, { useState, useEffect } from 'react';

// components
import MovieCard from '../components/MovieCard';

// router
import { useSearchParams } from 'react-router-dom';

// css
import './MovieGrid.scss';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [movies, setMovies] = useState([]);

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <section className="container">
      <h2 className="title">
        Resultados para: <span className='query-text'>{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && 
          movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
        }
      </div>
    </section>
  );
};

export default Search;
