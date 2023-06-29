import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie1', 'movie2', 'movie3', 'movie4', 'movie5'
  ]);
  console.log(setMovies)
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? ""
  /*  useEffect(() => {
      //HTTP запит, якщо потрібен   
     }, [])   state isLoading error*/
  
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


export default Movies;

//setSearchParams не поновлює searchParam а перезаписує поверх