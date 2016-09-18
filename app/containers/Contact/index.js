import React from 'react';

import { Header, InfoList, RowInfo } from '../../components';

const Contact = () => (
  <section id="Contact">
    <Header text="Kontakt" />
    <InfoList>
      <RowInfo iconName="at" text="alimek@alimek.pl" href="mailto:alimek@alimek.pl"/>
    </InfoList>
  </section>
);

export default Contact;