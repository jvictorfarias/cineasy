import api from '../api/omdb';

interface MovieDetails {
  Director: string;
  Writter: string;
  Actors: string;
  Plot: string;
  Awards: string;
}

interface Request {
  id: string;
}

class ListMovieDetailsService {
  public async execute({ id }: Request): Promise<MovieDetails> {
    const { data } = await api.get<MovieDetails>('', {
      params: {
        i: id,
      },
    });

    const { Director, Writter, Actors, Plot, Awards } = data;

    return {
      Director,
      Writter,
      Actors,
      Plot,
      Awards,
    };
  }
}

export default ListMovieDetailsService;
