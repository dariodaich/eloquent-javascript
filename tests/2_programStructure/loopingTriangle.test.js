import loopingTriangle from '../../src/2_programStructure/loopingTriangle';

describe('Looping a Triangle', () => {
  describe('returns an empty string', () => {
    test('when called with no argument', () => {
      expect(loopingTriangle()).toEqual('');
    });

    test('when called with number "0"', () => {
      expect(loopingTriangle(0)).toEqual('');
    });

    test('when called with number "1"', () => {
      expect(loopingTriangle(1)).toEqual('');
    });
  });

  describe('when called with a positive integer', () => {
    test('when "2", it creates the correct string triangle', () => {
      const twoRowTriangle = '#\n##\n';
      expect(loopingTriangle(2)).toEqual(twoRowTriangle);
    });

    test('when "2", it creates the string with the correct length', () => {
      const twoRowTriangle = '#\n##\n';
      expect(loopingTriangle(2).length).toEqual(5);
    });

    test('when "3", it creates the correct string triangle', () => {
      const threeRowTriangle = '#\n##\n###\n';

      expect(loopingTriangle(3)).toEqual(threeRowTriangle);
    });

    test('when "131", it creates the string with the correct length', () => {
      expect(loopingTriangle(131).length).toEqual(8_777);
    });
  });

  describe('when called with a negative integer', () => {
    const threeRowTriangle = '#\n##\n';

    test('when "-2", it creates the correct string triangle', () => {
      expect(loopingTriangle(-2)).toEqual(threeRowTriangle);
    });
  });
});
