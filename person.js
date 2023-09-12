class Person {
  #id = Math.random();

  getID() {
    return this.#id;
  }
  setID(value) {
    this.#id = value;
  } 
}

module.exports = Person;
