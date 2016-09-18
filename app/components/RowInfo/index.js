import React from 'react';

import FontAwesome from 'react-fontawesome';
import styles from './styles.css';

const RowInfo = ({ iconName, iconColor, text, href }) => (
  <li className={styles.row}>
    <a className={styles.link} href={href}>
      <FontAwesome name={iconName} size="2x" className={styles.icon} style={{ color: iconColor }} />
      {text ? <span className={styles.text}>{text}</span> : null}
    </a>
  </li>
);

RowInfo.propTypes = {
  iconName: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  iconColor: React.PropTypes.string,
};

export default RowInfo;
