import React from 'react';
import renderer from 'react-test-renderer';
import PrivacyPage from 'webpage/pages/PrivacyPage';

let tree;

beforeAll(() => {
  tree = renderer.create(<PrivacyPage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
