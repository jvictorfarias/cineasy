interface MovieDetails {
  Director: string;
  Writter: string;
  Actors: string;
}

interface Request {
  id: string;
}

class ListMovieDetailsService {
  public async execute({ id }: Request): Promise<Movie> {}
}

export default ListMovieDetailsService;
