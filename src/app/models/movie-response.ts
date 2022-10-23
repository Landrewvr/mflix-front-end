import { Movie } from "./movie";

export class MovieResponse {
    data: Array<Movie> = [new Movie()]
    count: number = 0;
}