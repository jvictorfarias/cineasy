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
    const { data: searchResult } = await api.get<APIResponse>('', {
      params: {
        s: title,
        type: 'movie',
      },
    });

    const moviesWithRating: Promise<Movie>[] = searchResult.Search.map(
      async movie => {
        const { data } = await api.get<RatingResponse>('', {
          params: {
            i: movie.imdbID,
          },
        });
        return {
          imdbID: movie.imdbID,
          Title: movie.Title,
          Year: movie.Year,
          Poster: movie.Poster,
          imdbRating: data.imdbRating,
        };
      },
    );

    const moviesList = await Promise.all(moviesWithRating);

    return moviesList;
  }
}

export default ListMovieService;
