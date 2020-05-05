import React, { LiHTMLAttributes } from 'react';

import { FiHeart } from 'react-icons/fi';
import noImg from '../../assets/no-image.svg';

import { Container, Mask } from './styles';

interface CardProps extends LiHTMLAttributes<HTMLLIElement> {
  key: string;
  imdbId: string;
  title: string;
  poster: string;
  year: string;
  imdbRating: string;
}

const Card: React.FC<CardProps> = ({
  imdbId,
  title,
  poster,
  year,
  imdbRating,
  ...rest
}) => (
  <Container emptyImg={poster === 'N/A'} {...rest}>
    <Mask>
      <FiHeart size={24} fill="#fff" />
      <p>{title}</p>
      <span>{year}</span>
    </Mask>
    {poster !== 'N/A' ? (
      <img src={poster} alt={imdbId} />
    ) : (
      <img src={noImg} alt="empty" />
    )}
  </Container>
);
export default Card;
