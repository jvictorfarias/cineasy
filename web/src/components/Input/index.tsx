import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Input: React.FC = ({ ...rest }) => (
  <Container>
    <FiSearch color="#7A8C99" size={20} />
    <input placeholder="Search movies..." />
  </Container>
);

export default Input;
