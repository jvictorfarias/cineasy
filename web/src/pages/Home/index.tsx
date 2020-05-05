import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, Content, InputContainer, CardContainer } from './styles';

import Empty from '../../components/Empty';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<string>('');

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

  const handleSetFilter = useCallback((newFilter: string) => {
    console.log(newFilter);
    setFilter(newFilter);
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <InputContainer>
            <FiSearch color="#7a8c99" size={20} />
            <Input updateFilter={handleSetFilter} />
            <Button>Search</Button>
          </InputContainer>
        </form>

        {movies.length === 0 ? (
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
        ) : (
          <Empty />
        )}
      </Content>
    </Container>
  );
};

export default Home;
