import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from 'webpage/pages/AboutPage';

let tree;

beforeAll(() => {
  tree = renderer.create(<AboutPage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
