import { fetchTrendingMovies } from "Services/Api";
import { useState, useEffect } from 'react';
import MoviesList from "components/MoviesList/MoviesList";
import css from './Home.module.css';
import Loader from "components/Loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => {
        setMovies(response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.trending__title}>Trending today</h1>
      {loading ? (
        <Loader/> 
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Home;



// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     fetchTrendingMovies().then(response => setMovies(response))
//   }, []);
  
//   return <div className={css.container}>
//     <h1 className={css.trending__title}>Trending today</h1>
//     <MoviesList movies={movies} />
//   </div>
// };

// export default Home;


/*
    
}*/ 