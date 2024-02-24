import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";
//import css from './App.module.css';
//import Home from "pages/Home/Home";
//import MovieDetails from "pages/MovieDetails/MovieDetails";
//import Movies from "pages/Movies/Movies";
//import { Cast } from "./Cast/Cast";
//import { Reviews } from "./Reviews/Reviews";


const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Cast = lazy(() =>
  import("./Cast/Cast").then(module => ({
    ...module,
    default: module.Cast,
  })));
const NotFoundPage = lazy(()=> import("../pages/NotFound/NotFound"));


export const App = () => {
  //console.log(window.location)
  //console.log(window.history)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<div><h1 className={css.not__found}>Ooooops, page not found</h1></div>} /> */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>  
  )
};

