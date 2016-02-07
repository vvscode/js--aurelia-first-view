import {HttpClient} from 'aurelia-http-client';
import { sayHello } from 'greeter';

export class App {
  constructor() {
    this.message = '';
    this.http = new HttpClient();
  }

  activate() {
    this.message = 'Hello from Aurelia';
    return this.http.get('/api/movies.json')
      .then((response) => this.movies = response.content);
  }

  onClick() {
    sayHello();
  }
}