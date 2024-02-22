import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './Layout.module.css'
import Loader from "components/Loader/Loader";


export const Layout = () => {
    return <>
        <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink className={({ isActive }) => `${css['header__link']}  ${isActive ? css['active'] : ''}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `${css['header__link']}  ${isActive ? css['active'] : ''}`} to="/movies">Movies</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<Loader />}>
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                <Outlet />
            </Suspense>
        </main>
    </>
};
