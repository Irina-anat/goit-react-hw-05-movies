import React, { useRef } from 'react';
import css from './NotFound.module.css';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');

  return (
    <div className={css.page}>
      <div className={css.container}>
        <h1 className={css.not__title}>404 Not Found</h1>
        <p className={css.not__text}>
          Oops! The page you are looking for might be in another castle.
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
