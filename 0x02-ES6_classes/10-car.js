export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car (returns a new instance)
  cloneCar() {
    // Using the 'new' keyword to return a new object of the Car class
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
