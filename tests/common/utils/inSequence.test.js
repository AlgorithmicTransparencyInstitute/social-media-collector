import inSequence from 'common/utils/inSequence';

const p1 = jest.fn().mockResolvedValue();
const p2 = jest.fn().mockResolvedValue();
const p3 = jest.fn().mockResolvedValue();

const promises = [p1(), p2(), p3()];

const _result = promises.reduce(inSequence, Promise.resolve());

[p1, p2, p3].forEach(p => {
  it('invoked the promise', () => {
    expect(p).toHaveBeenCalledTimes(1);
  });
});
