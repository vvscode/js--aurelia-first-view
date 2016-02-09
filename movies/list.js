import { sayHello } from 'greeter';
import {inject} from "aurelia-framework";
import {MovieData} from './movieData';

@inject(MovieData)
export class List {
  constructor(movieData) {
    this.message = '';
    this.movieData = movieData;
  }

  activate() {
    this.message = 'Hello from Aurelia';
    return this.movieData.getAll().then(movies => this.movies = movies);
  }

  onClick() {
    sayHello();
  }
}