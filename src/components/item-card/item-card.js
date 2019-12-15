import React, { createElement } from 'react';
import classNames from 'classnames';

import { ExternalCTA } from '../cta';

import styles from './item-card.module.css';

const ItemCard = ({ title, children, type, url, footerText, titleAs }) => {
  const titleChildren = (
    <a href={url} rel="external" target="_blank">
      {title}
    </a>
  );
  const titleProps = {
    className: styles.title,
  };
  const titleContent = createElement(titleAs, titleProps, titleChildren);
  return (
    <div className={styles.wrapper}>
      <article className={classNames([styles.itemCard, styles[type]])}>
        {titleContent}
        {children}
        <p>
          <ExternalCTA url={url}>{footerText}</ExternalCTA>
        </p>
      </article>
    </div>
  );
};

ItemCard.defaultProps = {
  titleAs: 'h3',
};

export default ItemCard;
