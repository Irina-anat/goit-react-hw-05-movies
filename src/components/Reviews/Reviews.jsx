import { useParams } from "react-router-dom"

const Reviews = () => {
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams()
    
  /*  useEffect(() => {
//HTTP запит, якщо потрібен   
}, [])*/
    
  return <div>інформація про огляди: {movieId}</div>
};

export default Reviews;