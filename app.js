import {HttpClient} from 'aurelia-http-client';
import { sayHello } from 'greeter';

export class App {
  static inject() {
    return [
      HttpClient
    ];
  }

  constructor(httpClient) {
    this.message = '';
    this.http = httpClient;
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