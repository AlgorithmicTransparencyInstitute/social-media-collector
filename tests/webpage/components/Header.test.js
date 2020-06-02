import React from 'react';
import renderer from 'react-test-renderer';

import Header from 'webpage/components/Header';

let tree;

beforeAll(() => {
  tree = renderer.create(<Header />);
});

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
