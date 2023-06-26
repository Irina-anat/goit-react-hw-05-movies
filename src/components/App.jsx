import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home page</div>}/>
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>Kollection element</div>}/>
    </Routes>
  </div>
  )  
};
