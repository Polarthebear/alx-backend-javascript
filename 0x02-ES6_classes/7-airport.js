class Airport {
  // Constructor
  constructor(name, code) {
    // Validating input types
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Assigning to underscore properties
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Custom string description of the class (returns the airport code)
  toString() {
    return this._code;
  }
}

export default Airport;
