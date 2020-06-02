import React from 'react';
import renderer from 'react-test-renderer';

import App from 'toolbar/App';

import { setGranted } from 'common/components/ConsentAwareView';

jest.mock('common/components/ConsentAwareView');
jest.mock('toolbar/components/MainMenu');

let tree;

['none', 'old', 'current'].forEach(granted => {
  describe(`when consent is ${granted}`, () => {
    beforeAll(() => {
      setGranted(granted);
      tree = renderer.create(<App />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
