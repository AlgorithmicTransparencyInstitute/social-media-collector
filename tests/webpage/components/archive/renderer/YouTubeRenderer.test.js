import React from 'react';
import renderer from 'react-test-renderer';
import YouTubeRenderer from 'webpage/components/archive/renderer/YouTubeRenderer';

jest.mock('youtube-embed-video');

const base = {
  title: 'some video',
  itemType: 'recommendedVideo',
  id: '1234566789',
  itemId: 'abcdefghijklm',
  hostVideo: {
    title: 'some video',
    author: 'someone',
    id: '1234566789'
  }
};

let tree;

describe('when there is an advertiser', () => {
  describe('when there is a platformItemId', () => {
    beforeAll(() => {
      const item = {
        ...base,
        advertiser: 'some-advertiser',
        platformItemId: 'aabbccdd11223344'
      };
      tree = renderer.create(<YouTubeRenderer item={item} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when there is not a platformItemId', () => {
    beforeAll(() => {
      const item = {
        ...base,
        advertiser: 'some-advertiser'
      };
      tree = renderer.create(<YouTubeRenderer item={item} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('when there is not an advertiser', () => {
  describe('with a title', () => {
    beforeAll(() => {
      tree = renderer.create(<YouTubeRenderer item={base} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('without a title', () => {
    const { title: _title, ...rest } = base;
    beforeAll(() => {
      tree = renderer.create(<YouTubeRenderer item={rest} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
