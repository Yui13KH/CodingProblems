const AtoZ = require('./A-to-Z');

describe('printAlphabet', () => {

    test('should return the first 3 letters of the alphabet', () => {
      expect(AtoZ(3)).toBe('A, B, C');
    });
  
    test('should return the first 5 letters of the alphabet', () => {
      expect(AtoZ(5)).toBe('A, B, C, D, E');
    });
  
    test('works with all letters', () => {
      expect(AtoZ(26)).toBe('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z');
    });
  
    test('should return a message for non-integer input', () => {
      expect(AtoZ(2.5)).toBe('Error');
    });
  
    test('should return a message for negative number input', () => {
      expect(AtoZ(-3)).toBe('Error');
    });
  
    test('should return a message for non-numeric input', () => {
      expect(AtoZ('three')).toBe('Error');
    });
  
    test('should return the first letter for input of 1', () => {
      expect(AtoZ(1)).toBe('A');
    });
  
    test('should return a message for zero input', () => {
      expect(AtoZ(0)).toBe('Error');
    });
  
  });
  