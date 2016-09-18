import React from 'react';

import { Header, InfoList, RowInfo } from '../../components';
import styles from './styles.css';

const SocialMedia = () => (
  <section id="SocialMedia">
    <Header text="Media spełecznościowe" />
    <InfoList className={styles.list}>
      <RowInfo
        iconName="facebook"
        iconColor="#3b5998"
        href="https://www.facebook.com/grzegorz.mandziak"
      />
      <RowInfo
        iconName="github"
        href="https://github.com/alimek"
      />
      <RowInfo
        iconName="linkedin"
        iconColor="#007bb5"
        href="https://pl.linkedin.com/in/gmandziak"
      />
      <RowInfo
        iconName="twitter"
        iconColor="#4099FF"
        href="https://twitter.com/alimek_"
      />
    </InfoList>
  </section>
);

export default SocialMedia;