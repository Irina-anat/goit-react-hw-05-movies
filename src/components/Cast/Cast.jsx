import { useParams } from "react-router-dom"

export const Cast = () => {
  //щоб отримати динамічні параметри з url
  const { movieId } = useParams()
    
  /*  useEffect(() => {
//HTTP запит, якщо потрібен   
}, [])*/
  return <div>інформація про акторський склад: {movieId}</div>
};

