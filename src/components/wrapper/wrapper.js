import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './wrapper.module.css';

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
