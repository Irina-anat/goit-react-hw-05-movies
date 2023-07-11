import { useLocation, Link } from 'react-router-dom';
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={css.movie__list}>
            {movies.map(
                ({ id, title, poster_path }) =>
                   title &&  (<li className={css.movie__item} key={id}>
                    <Link
                        key={id}
                        to={`/movies/${id}`}
                        state={{ from: location }}>
                        <img
                            src={
                                poster_path
                                    ? 'https://image.tmdb.org/t/p/w300' + poster_path
                                    : 'https://via.placeholder.com/300x450'}
                            width={300}
                            height={450}
                            alt={title} />
                        <h2 className={css.list__title}>{title}</h2>
                    </Link>
                </li>))}
        </ul>)
};



export default MoviesList;


/*
*/