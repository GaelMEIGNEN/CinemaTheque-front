import { Actor } from "./Actor";

export class Film {
  id: string;
  title: string;
  posterUrl: string;
  synopsis: string;
  actorsStarring: Actor[];

  constructor(
    id: string,
    title: string,
    posterUrl: string,
    synopsis: string,
    actorsStarring: Actor[]
  ) {
    this.id = id;
    this.title = title;
    this.posterUrl = posterUrl;
    this.synopsis = synopsis;
    this.actorsStarring = actorsStarring;
  }
}
