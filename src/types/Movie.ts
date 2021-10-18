import Actor from "./Actor";

export default class Movie {
  id: string;
  title: string;
  posterPath: string;
  releaseDate: Date;
  overview: string;
  actorsStarring: Actor[];

  constructor(
    id: string,
    title: string,
    posterPath: string,
    releaseDate: Date,
    overview: string,
    actorsStarring: Actor[]
  ) {
    this.id = id;
    this.title = title;
    this.posterPath = posterPath;
    this.releaseDate = releaseDate;
    this.overview = overview;
    this.actorsStarring = actorsStarring;
  }
}
