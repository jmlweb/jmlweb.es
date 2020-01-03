import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import styles from './pagination.module.css';

const Pagination = ({ prefix = '', currentPage, numPages }) => {
  if (numPages < 2) {
    return null;
  }
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? `${prefix}` : `/${prefix}/${currentPage - 1}`;
  const nextPage = `/${prefix}/${currentPage + 1}`;

  return (
    <div className={styles.wrapper}>
      {!isFirst ? (
        <Link to={prevPage} rel="prev" className={styles.prevNext}>
          ← Prev Page
        </Link>
      ) : (
        <span className={styles.fakePrevNext}>← Prev Page</span>
      )}
      <ul className={styles.pages}>
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link
              to={`/${prefix}/${i === 0 ? '' : i + 1}`}
              className={classNames(styles.link, {
                [styles.active]: i + 1 === currentPage,
              })}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
      {!isLast ? (
        <Link to={nextPage} rel="next" className={styles.prevNext}>
          Next Page →
        </Link>
      ) : (
        <span className={styles.fakePrevNext}>Next Page →</span>
      )}
    </div>
  );
};

export default Pagination;
