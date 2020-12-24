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
    animal.push(cat || dog);
  }

  dequeue(pref) {
    if (pref !== Cat || pref !== Dog) {
      return null;
    }
    return pref.shift(Cat || Dog);
  }
}
