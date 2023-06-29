import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};
