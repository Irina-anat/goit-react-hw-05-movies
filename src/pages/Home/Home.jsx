import { fetchTrendingMovies } from "Services/Api";
import { useState, useEffect } from 'react';
import MoviesList from "components/MoviesList/MoviesList";
import css from './Home.module.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response))
  }, []);
  
  return <main className={css.container}>
    <h1 className={css.trending__title}>Trending today</h1>
    <MoviesList movies={movies} />
  </main>
};

export default Home;


/*
    
}*/ 