import { observedAtRecentFirst } from 'webpage/utils/sorts';

describe('observedAtRecentFirst', () => {
  const oldItem = {
    id: '1',
    observedAt: new Date('2020-02-10T00:00:00.000Z').getTime()
  };
  const midItem = {
    id: '2',
    observedAt: new Date('2020-02-11T00:00:00.000Z').getTime()
  };
  const newItem = {
    id: '3',
    observedAt: new Date('2020-02-12T00:00:00.000Z').getTime()
  };

  const unsorted = [oldItem, newItem, midItem];
  const expected = [newItem, midItem, oldItem];

  let result;

  beforeAll(() => {
    result = [...unsorted].sort(observedAtRecentFirst);
  });

  it('sorts as expected', () => {
    expected.forEach(i => {
      expect(result[i]).toEqual(expected[i]);
    });
  });
});
