import React from 'react';
import renderer from 'react-test-renderer';
import SharePage from 'webpage/pages/SharePage';

let tree;

beforeAll(() => {
  tree = renderer.create(<SharePage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
