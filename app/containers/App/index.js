import React from 'react';

import styles from './styles.css';
import Footer from '../Footer';

const App = ({ children }) => (
  <div className={styles.full}>
    <div className={styles.content}>
      {React.Children.toArray(children)}
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;