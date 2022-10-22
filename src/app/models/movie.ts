import { Awards } from "./award";
import { Imdb } from "./imdb";
import { Tomatoes } from "./tomatoes";

export class Movie {
    _id: string = '';
    plot: string  = '';
    runtime: number  = 0
    rated: string  = '';
    poster: string  = '';
    title: string  = '';
    fullplot: string  = '';
    released: Date = new Date();
    writers: Array<string> = [];
    awards: Array<Awards> = [new Awards()];
    lastupdated: Date = new Date();
    year: number = 0;
    imdb: Imdb = new Imdb();
    type: string = '';
    lasupdated: Date = new Date();
    genres: Array<string> = [];
    cast: Array<string> = [];
    languages: Array<string> = [];
    directors: Array<string> = [];
    countries: Array<string> = [];
    tomatoes: Tomatoes = new Tomatoes();
}