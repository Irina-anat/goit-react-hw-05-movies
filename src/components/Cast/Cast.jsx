import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieCast} from "Services/Api"; 
import css from './Cast.module.css';


export const Cast = () => {
  const [cast, setCast] = useState([]);
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams();
  //console.log(movieId)
  
  useEffect(() => {
    if (!movieId) return;
    async function fetchCast() {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  // console.log(cast)
  
  return (<div>
    <ul className={css.cast__box}>
      {cast && cast.map(({ id, profile_path, original_name, character }) =>
        <li className={css.cast__card} key={id}>
          <img className={css.cast__img} src={
            profile_path
              ? 'https://image.tmdb.org/t/p/w300' + profile_path
              : 'https://via.placeholder.com/200x300'
          }
            width={200}
            height={300}
            alt={original_name} />
          <div className={css.cast__description}>
            {original_name && <p className={css.cast__text}>Actor: {original_name}</p>}
            {character && <p className={css.cast__text}>Character: {character}</p>}
          </div>
        </li>
      )}
    </ul>
  </div>)
};





/*
export const Cast = () => {
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams()
    
 useEffect(() => {
//HTTP запит, якщо потрібен   
}, [])

  return <div>інформація про акторський склад: {movieId}</div>
};
*/