const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when summing 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when summing -0.1 and 0.1', () => {
      assert.strictEqual(calculateNumber('SUM', -0.1, 0.1), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 4.5 from 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when subtracting 0.7 from 3.6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.6, 0.7), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});