import makeHandler from 'content/youtube/utils/makeHandler';
import validate from 'content/youtube/utils/validate';
import permissions from 'content/youtube/utils/permissions';

jest.mock('content/youtube/utils/validate');
jest.mock('content/youtube/utils/permissions');

const report = jest.fn().mockResolvedValue();
const analyse = jest.fn(i => i);
const data = { some: 'data' };
const perms = { somePermissions: true };

const handler = makeHandler(analyse, report);

const cleanup = () => {
  report.mockClear();
  analyse.mockClear();
  validate.mockReset();
  permissions.mockClear();
};

beforeAll(() => {
  permissions.mockReturnValue(perms);
});

describe('when source is window', () => {
  describe('data is valid', () => {
    beforeAll(async () => {
      await handler({ source: window, data });
    });

    afterAll(cleanup);

    it('called analyse with data', () => {
      expect(analyse).toHaveBeenCalledWith(data, perms);
    });

    it('called report once', () => {
      expect(report).toHaveBeenCalledTimes(1);
    });
  });

  describe('data is invalid', () => {
    beforeAll(async () => {
      validate.mockImplementation(() => {
        throw new Error('Invalid Data');
      });

      await handler({ source: window, data });
    });

    afterAll(cleanup);

    it('did not call analyse with data', () => {
      expect(analyse).not.toHaveBeenCalled();
    });
  });

  describe('some other error', () => {
    beforeAll(async () => {
      validate.mockImplementation(() => {
        throw new Error('something else');
      });

      await handler({ source: window, data });
    });

    afterAll(cleanup);

    it('did not call analyse with data', () => {
      expect(analyse).not.toHaveBeenCalled();
    });
  });
});

describe('when source is not window', () => {
  beforeAll(async () => {
    await handler({ source: 'not window', data });
  });

  afterAll(cleanup);

  it('did not call analyse', () => {
    expect(analyse).not.toHaveBeenCalled();
  });

  it('did not  call report', () => {
    expect(report).not.toHaveBeenCalled();
  });
});
