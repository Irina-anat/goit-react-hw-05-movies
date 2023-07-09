import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "Services/Api";
import css from './Reviews.module.css';

const Reviews = () => {
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams();
  //console.log(movieId)
  const [review, setReview] = useState([]);
    
  useEffect(() => {
    if (!movieId) return;
    async function fetchReview() {
      try {
        const Review = await fetchMovieReviews(movieId);
        setReview(Review);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);

  //console.log(review)
    
  return (<>
    {review.length > 0 ? (
      <ul>
        {review.map(({ id, author, content }) =>
          <li className={css.review__item} key={id}>
            {author && <h3 className={css.review__title}>Author: {author}</h3>}
            {content && <p>{content}</p>}
          </li>)}
      </ul>
    ) : (<p>No review</p>)}
  </>
  )
};


export default Reviews;




/* const Reviews = () => {
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams()
    
 useEffect(() => {
//HTTP запит, якщо потрібен   
}, [])
    
  return <div>інформація про огляди: {movieId}</div>
};*/