import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-framework";

const baseUrl = '/api/movies.json';

@inject(HttpClient)
export class MovieData {
  constructor(httpClient) {
    this.http = httpClient;

    this.data = null;
  }

  getAll() {
    if(this.data) {
      return new Promise((resolve) => setTimeout(() => resolve(this.data), 1000))
    }

    return this.http.get(baseUrl)
      .then((data) => new Promise((resolve) => setTimeout(() => resolve(data), 3000)))
      .then((response) => this.data = response.content);
  }

  getById(id) {
    return this.getAll()
      .then((content) => content.find((item) => item.id == id));
  }

  save(movie) {
    // fake instead of http request
    return new Promise((resolve) => setTimeout(() => resolve(movie), 1000))
  }
}