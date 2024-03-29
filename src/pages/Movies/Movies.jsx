import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'Services/Api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); 
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetchSearchMovies(query);
        if (isMounted) {
          if (response.length === 0) {
            Notify.info('Nothing was found by request. Try another value...');
          } else {
            setMovies([...response]);
          }
        }
      } catch (error) {
        console.error('Error fetching search movies:', error);
        Notify.failure('Error fetching movies. Please try again later.');
      } finally {
        setLoading(false); 
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <div className={css.container__search}>
      <SearchForm location={location} onSubmit={handleSubmit} />
      {loading ? (
        <Loader /> 
      ) : (
        movies.length > 0 && <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Movies;


//   const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';

//   const handleSubmit = value => {
//     setSearchParams({ query: value });
//   };

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     let isMounted = true;// for Notify.warning

//     const fetchData = async () => {
//       const response = await fetchSearchMovies(query);
//       if (isMounted) {
//         if (response.length === 0) {
//           Notify.info('Nothing was found by request. Try another value...');
//         } else {
//           setMovies([...response]);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       isMounted = false;
//     };
//   }, [query]);

//   return (
//     <div className={css.container__search}>
//       <SearchForm location={location} onSubmit={handleSubmit} />
//       {movies.length > 0 && <MoviesList movies={movies} />}
//     </div>
//   );
// };

// export default Movies;

//setSearchParams не поновлює searchParam а перезаписує поверх

/*const Movies = () => {
  const [movies, setMovies] = useState([
    'movie1', 'movie2', 'movie3', 'movie4', 'movie5'
  ]);
 // console.log(setMovies)
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? ""
    useEffect(() => {
      //HTTP запит, якщо потрібен   
     }, [])   //state isLoading error
  
  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === "") {
      return setSearchParams({});
    };
    //якщо event.target.value "", то записуємо {} чистимо
    setSearchParams({ movieId: movieIdValue })
    //якщо event.target.value не "", то записуємо (movieId: event.target.value)
  };

  console.log(location)
  
  const visibleMovies = movies.filter(movie => movie.includes(movieId))
  
  return <div>
    <input type="text"
      value={movieId}
      onChange={updateQueryString} />
    {visibleMovies.map(movie => {
      return (
        <Link key={movie} to={`${movie}`} state={{ from: location }}>
          {movie}
        </Link>
      )
    })}
  </div>
};

export default Movies;*/

//Previous
// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';

//   const handleSubmit = (value) => {
//     setSearchParams({ query: value })
//   };

//  /* useEffect(() => {
//     searchQuery && fetchSearchMovies(searchQuery).then(response => setMovies([...response]));
//   }, [searchQuery]);*/
  
//  useEffect(() => {
//     if (!query) return;
//     fetchSearchMovies(query).then(response => setMovies([...response]));
//   }, [query]);
  
//   return (<main className={css.container__search}>
//       <SearchForm location={location} onSubmit={handleSubmit} />
//       {movies.length > 0 && <MoviesList movies={movies} />}
//   </main>)
// };
