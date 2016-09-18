import React from 'react';

import styles from './styles.css';

const InfoList = ({ children, className }) => <ul className={[styles.list, className].join(' ')}>{children}</ul>;

InfoList.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default InfoList;
