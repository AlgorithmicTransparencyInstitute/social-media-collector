import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import useNavigation from 'common/hooks/useNavigation';
import useArchive from 'common/hooks/useArchive';

import Navigation from 'webpage/components/Navigation';

jest.mock('common/hooks/useNavigation');
jest.mock('common/hooks/useArchive');

const goto = jest.fn();

describe('rendering', () => {
  let tree;

  describe('terms page is active', () => {
    beforeAll(() => {
      useNavigation.mockReturnValue({ current: 'terms', goto });
    });

    describe('useArchive returns items', () => {
      beforeAll(() => {
        useArchive.mockReturnValue({ index: [] });
        tree = renderer.create(<Navigation />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('useArchive returns nothing', () => {
      beforeAll(() => {
        useArchive.mockReturnValue({ index: undefined });
        tree = renderer.create(<Navigation />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('no page is active', () => {
    beforeAll(() => {
      useNavigation.mockReturnValue({ current: null, goto });
      useArchive.mockReturnValue({ index: [] });
      tree = renderer.create(<Navigation />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('clicking', () => {
  beforeAll(() => {
    const wrapper = mount(<Navigation />);
    wrapper
      .find('a')
      .first()
      .simulate('click');
  });

  it('called goto', () => {
    expect(goto).toHaveBeenCalled();
  });
});
