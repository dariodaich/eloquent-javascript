import { chessboard } from '../../src/2_programStructure/chessboard';

describe('Chessboard', () => {
  describe('is invalid when', () => {
    it('is called without arguments', () => {
      expect(chessboard()).toEqual(
        'Invalid size. To generate a chessboard provide number greater than one.'
      );
    });

    it('is passed a negative number', () => {
      expect(chessboard(-2)).toEqual(
        'Invalid size. To generate a chessboard provide number greater than one.'
      );
    });

    it('is passed number "0"', () => {
      expect(chessboard(0)).toEqual(
        'Invalid size. To generate a chessboard provide number greater than one.'
      );
    });

    it('is passed number "1"', () => {
      expect(chessboard(1)).toEqual(
        'Invalid size. To generate a chessboard provide number greater than one.'
      );
    });
  });

  describe('is valid when', () => {
    it('returns a string', () => {
      expect(typeof chessboard(2)).toEqual('string');
    });

    it('is passed a number two', () => {
      expect(chessboard(2)).not.toEqual(
        'Invalid size. To generate a chessboard provide number greater than one.'
      );
    });
  });

  describe('when size of the board is "2"', () => {
    it('returns a string', () => {
      expect(typeof chessboard(2)).toEqual('string');
    });

    it('returns a string of correct length', () => {
      expect(chessboard(2).length).toEqual(6);
    });

    it('returns a string with correct structure', () => {
      const boardWithCorrectStructure = ' #\n# \n';

      expect(chessboard(2)).toEqual(boardWithCorrectStructure);
    });
  });

  describe('when size of the board is a greater integer', () => {
    it('returns a string', () => {
      expect(typeof chessboard(131)).toEqual('string');
    });

    it('returns a string of correct length', () => {
      expect(chessboard(131).length).toEqual(17_292);
    });

    it('contains "131" newline chars', () => {
      const newlineCharCount = chessboard(131)
        .split('')
        .filter((char) => char === '\n').length;

      expect(newlineCharCount);
    });
  });
});
