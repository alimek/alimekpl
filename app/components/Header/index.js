import React from 'react';

import styles from './styles.css';

const Header = ({ text }) => <header className={styles.header}>{text}</header>;

Header.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Header;
