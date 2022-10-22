
import { Critic } from "./critic";
import { Viewer } from "./viewer";

export class Tomatoes{
    viewer: Viewer = new Viewer();
    critic: Critic = new Critic();
    dvd: Date = new Date();
    lastUpdated: Date = new Date();
    consensus: string = '';
    rotten: number = 0;
    production: string = '';
    fresh: number = 0;
}