class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  calculateArea() {
    return this.#width * this.#height;
  }
}

const width = 10;
const height = 5;
const rectangle = new Rectangle(width, height);
const area = rectangle.calculateArea();
