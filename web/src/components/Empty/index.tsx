import React from 'react';

import emptyImg from '../../assets/empty.svg';

import { Container } from './styles';

const Empty: React.FC = () => (
  <Container>
    <img src={emptyImg} alt="empty" />
    <strong>Don't know what to search?</strong>
    <span>Here's an offer you can't refuse</span>
  </Container>
);

export default Empty;
