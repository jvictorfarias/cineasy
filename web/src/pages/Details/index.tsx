import React from 'react';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';
import {
  Container,
  Content,
  Header,
  InfoContainer,
  PictureContainer,
  Rating,
  RatingContainer,
  RottenRating,
  FavoriteButton,
} from './styles';

import logoImg from '../../assets/logo.svg';
import imdbImg from '../../assets/imdb.svg';
import rottenImg from '../../assets/rotten.svg';

const Details: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="logo" />
        <FiArrowLeft size={24} />
      </Header>
      <Content>
        <InfoContainer>
          <span>86 min · 2014 ·</span>
          <h1>Titanic</h1>
          <RatingContainer>
            <Rating>
              <img src={imdbImg} alt="" />
              <span>7.5/10</span>
            </Rating>
            <RottenRating>
              <img src={rottenImg} alt="rotten" />
              <span>98%</span>
            </RottenRating>
            <FavoriteButton>
              <FiHeart size={16} color="#353f4c" />
              <span>Add to favorites</span>
            </FavoriteButton>
          </RatingContainer>
        </InfoContainer>
        <PictureContainer>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            alt="movie"
          />
        </PictureContainer>
      </Content>
    </Container>
  );
};

export default Details;
