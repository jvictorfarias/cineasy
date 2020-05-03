import api from '../api/omdb';

interface Request {
  title: string;
}

interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
}

interface APIResponse {
  Search: Movie[];
}

interface MovieList extends Movie {
  imdbRating: number;
}

class ListMovieService {
  public async execute({ title }: Request): Promise<APIResponse> {
    const searchResult = await api.get<APIResponse>('', {
      params: {
        s: title,
        type: 'movie',
      },
    });

    return searchResult.data;
  }
}

export default ListMovieService;
