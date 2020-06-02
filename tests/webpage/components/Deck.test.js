import React from 'react';
import renderer from 'react-test-renderer';

import Deck from 'webpage/components/Deck';

let tree;

beforeAll(() => {
  tree = renderer.create(
    <Deck>
      <p>Hello there</p>
    </Deck>
  );
});

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
