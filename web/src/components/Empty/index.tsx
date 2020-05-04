import React from 'react';

import emptyImg from '../../assets/empty.svg';

import { Container } from './styles';

const Empty: React.FC = () => (
  <Container>
    <img src={emptyImg} alt="empty" />
    <strong>Dont know what to search?</strong>
    <span>Heres and offer you cant refuse</span>
  </Container>
);

export default Empty;
