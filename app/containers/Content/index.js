import React from 'react';
import { observer } from 'mobx-react';

import { HashTag, Header } from '../../components';
import styles from './styles.css';
import Store from '../../store';

const tags = [
  'react', 'angularjs', 'php', 'symfony3', 'javascript', 'react-native', 'jira', 'jenkins', 'git-flow', 'responsive-web',
  'es6', 'gulp', 'bower', 'html', 'css', 'ionic', 'ios', 'sass', 'typescript', 'node.js', 'git', 'svn', 'osx', 'aws',
  'amazon', 'traveling', 'food', 'beer', 'whisky', 'photoshop', 'photography', 'apple', 'symfony2', 'less', 'sass',
  'redux', 'mobx'

];

Store.hashTags.replace(tags);

const Content = () => (
  <section id="Content" className={styles.content}>
    <Header text="Zaintersowania i umiejętności" />
    <div className={styles.hashes}>
      {Store.hashTags.map((hashTag, index) => <HashTag key={index} tag={hashTag} />)}
    </div>
  </section>
);

export default observer(Content);