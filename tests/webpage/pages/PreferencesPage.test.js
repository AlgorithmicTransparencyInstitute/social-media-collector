import React from 'react';
import renderer from 'react-test-renderer';
import PreferencesPage from 'webpage/pages/PreferencesPage';

jest.mock('webpage/components/PermissionCheckbox');
jest.mock('common/components/LocalePreferences');

let tree;

beforeAll(() => {
  tree = renderer.create(<PreferencesPage />);
});

it('rendered correctly', () => {
  expect(tree).toMatchSnapshot();
});
