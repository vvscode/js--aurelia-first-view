import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-framework";

const baseUrl = '/api/movies.json';

@inject(HttpClient)
export class MovieData {
  constructor(httpClient) {
    this.http = httpClient;
  }

  getAll() {
    return this.http.get(baseUrl)
      .then((response) => response.content);
  }

  getById(id) {
    return this.http.get(baseUrl)
      .then((response) => response.content.find((item) => item.id == id));
  }
}