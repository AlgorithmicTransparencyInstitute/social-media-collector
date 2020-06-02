import React from 'react';
import renderer from 'react-test-renderer';

import Card from 'webpage/components/Card';

let tree;

describe('without title or subtitle', () => {
  beforeAll(() => {
    tree = renderer.create(
      <Card>
        <p>Hello there</p>
      </Card>
    );
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('with title and subtitle', () => {
  beforeAll(() => {
    tree = renderer.create(
      <Card title="Test" subtitle="This is a test">
        <p>Hello there</p>
      </Card>
    );
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
