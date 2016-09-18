import React from 'react';

import styles from './styles.css';

const Avatar = ({ image, className }) => <div className={className}><img className={styles.img} src={image} /></div>;

Avatar.propTypes = {
  image: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
};

export default Avatar;