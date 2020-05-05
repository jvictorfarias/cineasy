import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import {
  Container,
  Content,
  InputContainer,
  SelectContainer,
  CardContainer,
} from './styles';

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
  const [sort, setSort] = useState<string>('title');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { data } = await api.get<Movie[]>('/movies', {
          params: {
            title: filter,
          },
        });

        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    },
    [filter],
  );

  const handleSortChange = useCallback((sortType: string) => {
    setSort(sortType);
  }, []);

  const handleSetFilter = useCallback((newFilter: string) => {
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
            <Button onClick={(event) => handleSubmit(event)}>Search</Button>
          </InputContainer>
        </form>

        {movies.length === 0 ? (
          <Empty />
        ) : (
          <>
            <SelectContainer>
              <span>Sort by: </span>
              <select
                onChange={(event) => handleSortChange(event.target.value)}
              >
                <option defaultChecked value="title">
                  Title
                </option>
                <option value="imdbRating">IMDB Rating</option>
              </select>
              <FiChevronDown />
            </SelectContainer>
            <CardContainer>
              {movies.map((movie) => (
                <Card
                  key={movie.imdbID}
                  imdbId={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  imdbRating={movie.imdbRating}
                />
              ))}
            </CardContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Home;
