import React from 'react';
import renderer from 'react-test-renderer';
import Button from 'common/components/Button';

let tree;

const label = 'Click here!';

describe('when to is defined', () => {
  const to = 'something';
  beforeAll(() => {
    tree = renderer.create(<Button label={label} to={to} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('when to is not defined', () => {
  beforeAll(() => {
    tree = renderer.create(<Button label={label} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('when onClick is provided', () => {
  beforeAll(() => {
    const onClick = jest.fn();

    tree = renderer.create(<Button label={label} onClick={onClick} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('when type is link', () => {
  beforeAll(() => {
    tree = renderer.create(<Button label={label} type="link" />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('when variant is "success"', () => {
  beforeAll(() => {
    tree = renderer.create(<Button label={label} variant="success" />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
