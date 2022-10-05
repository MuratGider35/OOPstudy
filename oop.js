class Trainee {
  static #id = 2000;
  constructor(name, email, path) {
    this.name = name;
    this.#email = email;
    this.path = path;
    this.stNumber = `F-${id}`;
    Trainee.id++;
  }
  skills() {
    return "suitable for working in the IT world";
  }
  getSummary() {
    return this.stNumber + " " + this.name;
  }
  getMail() {
    return this.#email;
  }
  setMail() {
    this.#email = email;
  }
}
