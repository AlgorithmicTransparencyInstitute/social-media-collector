import React from 'react';
import renderer from 'react-test-renderer';
import HelpPage from 'webpage/pages/HelpPage';

let tree;

beforeAll(() => {
  tree = renderer.create(<HelpPage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
