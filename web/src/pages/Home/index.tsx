import React, { useState, useCallback, useEffect } from 'react';
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

import { useStorage, Movie } from '../../hooks/storage';

const Home: React.FC = () => {
  const { searchMovies, movies, loading } = useStorage();

  const [filter, setFilter] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  useEffect(() => {
    const sortedMovies = movies.sort(
      (a, b) => Number(a[sort]) - Number(b[sort]),
    );

    console.log(sortedMovies);
    setMoviesList(sortedMovies);
  }, [movies, sort]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        searchMovies(filter);
      } catch (err) {
        console.log(err);
      }
    },
    [searchMovies, filter],
  );

  const handleSortChange = useCallback(
    (newSort: string) => {
      setSort(newSort);
    },
    [setSort],
  );

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
            <Button
              isLoading={!!loading}
              onClick={(event) => handleSubmit(event)}
            >
              Search
            </Button>
          </InputContainer>
        </form>

        {moviesList.length === 0 ? (
          <Empty />
        ) : (
          <>
            <SelectContainer>
              <span>Sort by: </span>
              <select
                onChange={(event) => handleSortChange(event.target.value)}
              >
                <option defaultChecked value="Year">
                  Year
                </option>
                <option value="imdbRating">IMDB Rating</option>
              </select>
              <FiChevronDown />
            </SelectContainer>
            <CardContainer>
              {moviesList.map((movie) => (
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
