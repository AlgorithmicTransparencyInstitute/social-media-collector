import React from 'react';
import renderer from 'react-test-renderer';
import YouTubeHostVideoRenderer from 'webpage/components/archive/renderer/YouTubeHostVideoRenderer';

jest.mock('youtube-embed-video');

const item = {
  title: 'some video',
  author: 'someone',
  id: '1234566789'
};

let tree;

beforeAll(() => {
  tree = renderer.create(<YouTubeHostVideoRenderer item={item} />);
});

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
