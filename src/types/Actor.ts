import Movie from "./Movie";

export default class Actor {
  _id: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  starredIn: Movie[];

  constructor(
    _id: string,
    firstName: string,
    lastName: string,
    pictureUrl: string,
    starredIn: Movie[]
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pictureUrl = pictureUrl;
    this.starredIn = starredIn;
  }
}
