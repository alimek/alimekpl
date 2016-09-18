import React from 'react';

import styles from './styles.css';
import { Avatar } from '../../components';

const BoxContainer = ({ children, avatar }) => (
  <div className={styles.container}>
    { avatar ? <Avatar className={styles.avatar} image={avatar} /> : null}
    {children}
  </div>
);

BoxContainer.propTypes = {
  children: React.PropTypes.node.isRequired,
  avatar: React.PropTypes.any,
};

export default BoxContainer;
