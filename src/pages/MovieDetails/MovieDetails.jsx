import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "Services/Api";
import css from './MovieDetails.module.css';



const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { title, poster_path, genres, vote_average, release_date, overview } = details;
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');
  const getDate = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
    
  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(response => setDetails({ ...response }))
      .catch(error => {
        console.error("Error fetching video data:", error);
      });
  }, [movieId]);
  
 
  return (
    <div className={css.movie__container}>
      <Link to={backLinkLocationRef.current}> <button type="button">Go back</button></Link>
      {details && (
        <div>
          <div className={css.movie__box}>
            <img className={css.movie__image}
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w300' + poster_path
                  : 'https://via.placeholder.com/300x450'
              }
              width={300}
              height={450}
              alt="title"
            />
            <div>
              <h2 className={css.movie__title}>{title} ({getDate})</h2>
              <p className={css.movie__text}>User score: {userScore}%</p>
              <h3 className={css.descriptin__title}>Overview:</h3>
              <p className={css.movie__text}>{overview}</p>
              <h3 className={css.descriptin__title}>Genres:</h3>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name ? genre.name : 'Unknown'}</li>))}
            </div>
          </div>
          <div>
            <h3 className={css.descriptin__title}>Additional information:</h3>
            <ul>
              <li><NavLink className={css.editional__title} to="cast">Cast</NavLink></li>
              <li><NavLink className={css.editional__title} to="reviews">Movie review</NavLink></li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;



/*
const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
    //щоб передати link попередній при переході на reviews чи cast
    //зберігаємо location з якого прийшли. Щоб глибоко не прокидати пропс
    const { movieId } = useParams()
    //console.log(params)  //{movieId: 'movie1'}
    //console.log(location)
    console.log(backLinkLocationRef)
    /*  useEffect(() => {
     //HTTP запит, якщо потрібен   
    }, []) отримати ідентифікатор фільму movieId  і робити запит */

    //location.state &&  location.state.from = location.state?.from
    /*return <>
        <h2> Movie Details: {movieId}</h2>
        <Link to={backLinkLocationRef.current}>Назад на сторінку пошуку</Link>
        <ul>
            <li>
                <Link to="cast">Movie cast</Link>
            </li>
            <li>
                <Link to="reviews">Movie reviews</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
        </Suspense>
        
    </>
};

export default MovieDetails;
*/ 