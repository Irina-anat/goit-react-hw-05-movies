import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useRef } from "react";

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
    return <>
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

/*
const MovieDetails = () => {
    
    return <>Movie Details</>
}
*/ 