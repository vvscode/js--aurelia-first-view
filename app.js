import {HttpClient} from 'aurelia-http-client';
import { sayHello } from 'greeter';
import {inject} from "aurelia-framework";

@inject(HttpClient)
export class App {
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