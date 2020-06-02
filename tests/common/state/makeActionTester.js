/* eslint-disable jest/no-export */
import cc from 'camelcase';

const makeActionTester = actions => expectations => {
  Object.keys(expectations).forEach(key => {
    const name = cc(key);
    const action = actions[name];
    const [args, expected, meta] = expectations[key];

    describe(`${name}(${args})`, () => {
      let result;

      beforeAll(() => {
        result = action(...args);
      });

      it('has the expected type', () => {
        expect(result).toHaveProperty('type', key);
      });

      if (expected === undefined) {
        it('returns no payload', () => {
          expect(result).not.toHaveProperty('payload');
        });
      } else {
        it('returns the expected payload', () => {
          expect(result).toHaveProperty('payload', expected);
        });
      }
      if (expected instanceof Error) {
        it('set the error flag', () => {
          expect(result).toHaveProperty('error', true);
        });
      }
      if (meta) {
        it('added the metadata', () => {
          expect(result).toHaveProperty('meta', meta);
        });
      }
    });
  });
};

export default makeActionTester;
