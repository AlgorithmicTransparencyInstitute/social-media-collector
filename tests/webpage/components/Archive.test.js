import React, { useState as useStateMock } from 'react';

import renderer from 'react-test-renderer';

import useArchive from 'common/hooks/useArchive';

import Archive from 'webpage/components/Archive';

const observedAt = new Date('2020-02-02T00:00:00Z').getTime();

jest.mock('common/hooks/useArchive');
jest.mock('webpage/components/archive/ArchiveList');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

const id = '1';
const items = {
  [id]: {
    id,
    platform: 'youtube',
    itemType: 'recommendedVideo',
    hostVideo: { id: '12345', url: 'http://www.youtube.com' },
    observedAt
  },
  '2': {
    id: '2',
    platform: 'facebook',
    itemType: 'publicPagePost',
    observedAt
  },
  '3': { id: '3', platform: 'facebook', itemType: 'sponsoredPost', observedAt },
  '4': {
    id: '4',
    platform: 'facebook',
    itemType: 'publicUserPost',
    observedAt
  },
  '5': {
    id: '5',
    platform: 'facebook',
    itemType: 'publicPagePost',
    observedAt
  }
};

const index = [id, '2', '3', '4', '5'];
const setActiveTab = jest.fn();
const setCurrentPage = jest.fn();

let tree;

describe('facebook ads tab', () => {
  describe('when there is stuff in the archive', () => {
    beforeAll(() => {
      useStateMock
        .mockImplementationOnce(t => [t, setActiveTab])
        .mockImplementationOnce(p => [p, setCurrentPage]);
      useArchive.mockReturnValue({
        items,
        index,
        oldest: observedAt,
        loading: false
      });
      tree = renderer.create(<Archive />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when there is no stuff in the archive', () => {
    describe('when it is loading', () => {
      beforeAll(() => {
        useStateMock
          .mockImplementationOnce(t => [t, setActiveTab])
          .mockImplementationOnce(p => [p, setCurrentPage]);
        useArchive.mockReturnValue({ items: {}, index: [], loading: true });
        tree = renderer.create(<Archive />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when it is simply empty', () => {
      beforeAll(() => {
        useStateMock
          .mockImplementationOnce(t => [t, setActiveTab])
          .mockImplementationOnce(p => [p, setCurrentPage]);
        useArchive.mockReturnValue({ items: {}, index: [], loading: false });
        tree = renderer.create(<Archive />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });
});

describe('youtube video tab', () => {
  describe('when there is stuff in the archive', () => {
    beforeAll(() => {
      useStateMock
        .mockImplementationOnce(() => ['youtubeVideos', setActiveTab])
        .mockImplementationOnce(p => [p, setCurrentPage]);
      useArchive.mockReturnValue({
        items,
        index,
        oldest: observedAt
      });
      tree = renderer.create(<Archive />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
