import { Actor } from "./Actor";

export class Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  actorsStarring: Actor[];

  constructor(
    id: string,
    title: string,
    poster_path: string,
    overview: string,
    actorsStarring: Actor[]
  ) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
    this.actorsStarring = actorsStarring;
  }
}
