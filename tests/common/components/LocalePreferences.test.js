import React from 'react';
import renderer from 'react-test-renderer';
import LocalePreferences from 'common/components/LocalePreferences';

jest.mock('common/components/PreferenceSelector');

let tree;

beforeAll(() => {
  tree = renderer.create(<LocalePreferences />);
});

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
