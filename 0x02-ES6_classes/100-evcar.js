// Import the Car class from the 10-car.js file
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor with brand, motor, and color
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar method to return an instance of the parent Car class
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
