import React from 'react';

import styles from './styles.css';

const HashTag = ({ tag }) => <span className={styles.tag}>#{tag}</span>;

HashTag.propTypes = {
  tag: React.PropTypes.string.isRequired,
};

export default HashTag;