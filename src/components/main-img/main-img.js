import React from 'react';
import classNames from 'classnames';

import styles from './main-img.module.css';

const MainImg = ({ fake }) => (
  <div
    className={classNames({
      [styles.wrapper]: true,
      [styles.fake]: fake,
    })}
    role="img"
    aria-label="Picture of José Manuel Lucas"
  />
);

export default MainImg;
