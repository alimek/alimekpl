import React from 'react';

import { BoxContainer } from '../../components';
import SocialMedia from '../SocialMedia';
import Content from '../Content';
import Contact from '../Contact';


const alimek = require('../../assets/images/avatar.jpg');

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BoxContainer avatar={alimek}>
        <Content />
        <Contact />
        <SocialMedia />
      </BoxContainer>
    );
  }
}

export default HomePage;

