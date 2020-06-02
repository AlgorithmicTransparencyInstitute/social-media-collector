import React from 'react';
import renderer from 'react-test-renderer';
import App from 'webpage/App';

import useNavigation from 'common/hooks/useNavigation';
import { setGranted } from 'common/components/ConsentAwareView';
import { ITEMS } from 'common/navigation';

jest.mock('common/hooks/useNavigation');
// jest.mock('webpage/pages/NewsPage');
jest.mock('webpage/pages/AboutPage');
jest.mock('webpage/pages/ArchivePage');
jest.mock('webpage/pages/PreferencesPage');
// jest.mock('webpage/pages/SharePage');
// jest.mock('webpage/pages/PrivacyPage');
jest.mock('webpage/pages/TermsPage');
jest.mock('webpage/pages/HelpPage');
jest.mock('webpage/components/Navigation');
jest.mock('common/components/ConsentAwareView');

[...Object.keys(ITEMS), ''].forEach(tab => {
  describe(`when tab is '${tab}'`, () => {
    let tree;

    describe('when granted is "current"', () => {
      beforeAll(() => {
        setGranted('current');
        useNavigation.mockReturnValue({ current: tab });
        tree = renderer.create(<App />);
      });

      it(`renders the ${tab} page with correct navigation`, () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when granted is not "current"', () => {
      beforeAll(() => {
        setGranted('none');
        useNavigation.mockReturnValue({ current: tab });
        tree = renderer.create(<App />);
      });

      it('renders the terms page with no navigation', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
