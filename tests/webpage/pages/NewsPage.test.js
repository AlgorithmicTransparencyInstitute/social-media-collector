import React from 'react';
import renderer from 'react-test-renderer';
import NewsPage from 'webpage/pages/NewsPage';

let tree;

beforeAll(() => {
  tree = renderer.create(<NewsPage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
