import React from 'react';

import renderer from 'react-test-renderer';

import ArchiveList from 'webpage/components/archive/ArchiveList';

jest.mock('webpage/components/archive/renderer/FacebookRenderer');
jest.mock('webpage/components/archive/renderer/YouTubeRenderer');
jest.mock('webpage/components/archive/renderer/YouTubeHostVideoRenderer');

const items = [{ id: '1', platform: 'youtube' }, { id: '2', platform: 'facebook' }, { id: '3' }];

let tree;

beforeAll(() => {
  tree = renderer.create(<ArchiveList items={items} />);
});

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
