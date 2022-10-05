class Trainee {
  static #id = 2000;
  #email;
  constructor(name, email, path) {
    this.name = name;
    this.#email = email;
    this.path = path;
    this.stNumber = `F-${Trainee.#id}`;
    Trainee.#id++;
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

class FS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //!overloading
  skills(title) {
    return `${this.name} working with ${title}`;
  }
}

const fs1 = new FS("murat", "m.gider35@gmail.com", "Full-Stack", "Front-End");
console.log(fs1.skills("front-end developer"));
const tr1 = new Trainee("yiğit", "yiğit@gmail.com", "Data Science");
console.log(tr1.skills());

class DS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //!override
  skills() {
    return `${this.name} working Data-Scientist`;
  }
}

const ds1 = new DS("ali", "ali@gmail.com", "Data-Science", "data-scientist");
console.log(ds1.skills());
console.log(ds1.name);
console.log(ds1.email);
console.log(ds1.getMail());
console.log(fs1.getSummary());
console.log(tr1.getSummary());
console.log(ds1.getSummary());
