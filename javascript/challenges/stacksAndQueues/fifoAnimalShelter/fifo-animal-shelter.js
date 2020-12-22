'use strict';

const Cat = require('./cat');
const Dog = require('./dog');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    const cat = new Cat();
    const dog = new Dog();

  }

  dequeue(pref) {
    if (pref !== this.dog || pref !== this.cat) {
      return null;
    }
  }
}
