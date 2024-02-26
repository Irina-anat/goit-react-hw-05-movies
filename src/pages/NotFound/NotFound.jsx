import React, { useRef } from 'react';
import css from './NotFound.module.css';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');

  return (
    <div className={css.page}>
      <div className={css.container}>
        <h1 className={css.notFound__title}>404 Not Found</h1>
        <p className={css.notFound__text}>
         Oops! It looks like the page you are searching for might be located somewhere else  🙃
        </p>
        <Link to={backLinkLocationRef.current}>
        {' '}
        <button type="button" aria-label="Go back to the previous page">Go to search</button>
      </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;



