import Actor from "./Actor";

export default class Movie {
  _id: string;
  title: string;
  posterPath: string;
  releaseDate: Date;
  overview: string;
  actorsStarring: Actor[];

  constructor(
    _id: string,
    title: string,
    posterPath: string,
    releaseDate: Date,
    overview: string,
    actorsStarring: Actor[]
  ) {
    this._id = _id;
    this.title = title;
    this.posterPath = posterPath;
    this.releaseDate = releaseDate;
    this.overview = overview;
    this.actorsStarring = actorsStarring;
  }
}
