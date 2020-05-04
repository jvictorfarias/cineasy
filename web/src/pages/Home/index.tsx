import React, { useState, useEffect, useRef } from 'react';
import { Container, Content, CardContainer } from './styles';

import Empty from '../../components/Empty';
import Input from '../../components/Input';
import Card from '../../components/Card';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<string>('');

  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const { data } = await api.get<Movie[]>('/movies', {
          params: {
            title: 'titanic',
          },
        });

        setMovies(data);

        console.log(movies);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Input />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>

        <Empty />
      </Content>
    </Container>
  );
};

export default Home;
