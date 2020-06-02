import hasNested from 'content/facebook/utils/visible/hasNested';

const contains = jest.fn(() => true);
const element = { contains };

const hasNestedElement = hasNested(element);

// elminate the first element as it's me
// keep the second element as its `contains` fn returns true
// reject the third element as its `contains` fn returns false
const elements = [element, { ...element }, { contains: () => false }];
const expected = [elements[1]];

it('filters correctly', () => {
  expect(elements.filter(hasNestedElement)).toEqual(expected);
});
