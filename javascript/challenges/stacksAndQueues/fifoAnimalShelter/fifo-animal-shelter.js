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
    animal.push(cat||dog);
  }

  dequeue(pref) {
    if (pref !== this.dog || pref !== this.cat) {
      return null;
    }
    return pref.pop(this.cat||this.dog);
  }
}
