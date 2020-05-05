import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../services/api';

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  favorite?: boolean;
  [key: string]: string | boolean | undefined;
}

interface StorageContextData {
  movies: Movie[];
  favorites: Movie[];
  loading: boolean;
  searchMovies(filter: string): Promise<void>;
  addFavorite(movie: Movie): void;
}

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData,
);

export const StorageProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>(() => {
    const storedMovies = localStorage.getItem('@Cineasy:movies');

    if (storedMovies) {
      return JSON.parse(storedMovies);
    }

    return [] as Movie[];
  });

  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storedFavorites = localStorage.getItem('@Cineasy:favorites');

    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }

    return [] as Movie[];
  });

  const searchMovies = useCallback(
    async (filter: string) => {
      setLoading(true);
      try {
        const { data } = await api.get<Movie[]>('/movies', {
          params: {
            title: filter,
          },
        });

        localStorage.clear();

        localStorage.setItem(
          '@Cineasy:movies',
          JSON.stringify([...favorites, ...data]),
        );

        setMovies([...favorites, ...data]);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    },
    [favorites],
  );

  const addFavorite = useCallback(
    (movie: Movie) => {
      setFavorites([...favorites, movie]);
      localStorage.setItem('@Cineasy:favorites', JSON.stringify(favorites));
    },
    [favorites],
  );

  return (
    <StorageContext.Provider
      value={{
        movies,
        favorites,
        loading,
        searchMovies,
        addFavorite,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export function useStorage(): StorageContextData {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('useStorage must be used within a Storage Provider');
  }

  return context;
}
