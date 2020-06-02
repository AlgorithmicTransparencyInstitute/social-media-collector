import React from 'react';

import renderer from 'react-test-renderer';

import Pagination from 'webpage/components/archive/Pagination';

const changePage = jest.fn();

let tree;

describe('when there is only one page', () => {
  beforeAll(() => {
    tree = renderer.create(<Pagination pages={1} currentPage={1} onChange={changePage} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('when there are two pages', () => {
  describe('current page is 1', () => {
    beforeAll(() => {
      tree = renderer.create(<Pagination pages={2} currentPage={1} onChange={changePage} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('current page is 2', () => {
    beforeAll(() => {
      tree = renderer.create(<Pagination pages={2} currentPage={2} onChange={changePage} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
