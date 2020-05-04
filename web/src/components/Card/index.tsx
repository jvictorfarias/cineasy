import React from 'react';

import { FiHeart } from 'react-icons/fi';

import { Container, Mask } from './styles';

const Card: React.FC = () => (
  <Container>
    <Mask>
      <FiHeart size={24} fill="#fff" />
      <p>What we do in the shadows</p>
      <span>1998</span>
    </Mask>
    <img
      src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      alt="img"
    />
  </Container>
);
export default Card;
