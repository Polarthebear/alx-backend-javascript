const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
    });
    it('should handle large numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 12345.6, 78901.4), 91247);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 4);
    });
    it('should handle large numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 12345.6, 78901.4), -66556);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });
    it('should handle large numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 12345.6, 78901.4), 0.156);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
