import { sayHello } from 'greeter';

export class App {
  constructor() {
    this.message = 'Hello from Aurelia';
  }

  onClick() {
    sayHello();
  }
}