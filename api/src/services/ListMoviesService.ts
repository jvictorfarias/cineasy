import api from '../api/omdb';

interface Request {
  title: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: 'movie' | 'series' | 'episode';
  Poster: string;
  imdbRating?: string;
}

interface APIResponse {
  Search: Movie[];
}

interface RatingResponse {
  imdbRating: string;
  Plot: string;
}
interface Response {
  movies: Movie[];
}

class ListMovieService {
  public async execute({ title }: Request): Promise<Movie[]> {
    const { data: searchQuery } = await api.get<APIResponse>('', {
      params: {
        s: title,
        type: 'movie',
      },
    });

    const filteredResults = searchQuery.Search.reduce(
      (accumulator: Movie[], movie: Movie) => {
        if (
          !accumulator.find((element: Movie) => element.imdbID === movie.imdbID)
        ) {
          accumulator.push(movie);
        }

        return accumulator;
      },
      [],
    );

    const moviesWithRating: Promise<Movie>[] = filteredResults.map(
      async movie => {
        const { data: ratingQuery } = await api.get<RatingResponse>('', {
          params: {
            i: movie.imdbID,
          },
        });
        return {
          imdbID: movie.imdbID,
          Title: movie.Title,
          Year: movie.Year,
          Poster: movie.Poster,
          imdbRating: ratingQuery.imdbRating,
        };
      },
    );

    const moviesList = await Promise.all(moviesWithRating);

    return moviesList;
  }
}

export default ListMovieService;
