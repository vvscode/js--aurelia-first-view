import {inject} from "aurelia-framework";
import {MovieData} from './movieData';
import {Router} from 'aurelia-router';
import {Validation} from 'aurelia-validation';

@inject(MovieData, Router, Validation)
export class Details {

  constructor(movieData, router, validation) {
    this.data  = movieData;
    this.router = router;
    this.validation = validation.on(this)
      .ensure('movie.name')
        .isNotEmpty()
        .hasMinLength(3)
        .hasMaxLength(100)
      .ensure('movie.year')
        .isNumber()
        .isBetween(1900, 2100);
  }

  activate(params) {
    return this.data.getById(params.id)
      .then((movie) => {
        this.movie = movie;
        this.validation.validate();
      });
  }

  save() {
    this.validation.validate().then(() => {
      this.data.save(this.movie)
        .then(movie => {
          let url = this.router.generate('details', { id: movie.id });
          this.router.navigate(url);
        });
    });
  }

}