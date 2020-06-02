import React from 'react';
import renderer from 'react-test-renderer';
import ArchivePage from 'webpage/pages/ArchivePage';

import { setGranted } from 'common/components/ConsentAwareView';

jest.mock('common/components/ConsentAwareView');
jest.mock('webpage/components/Archive');

['none', 'old', 'current'].forEach(granted => {
  describe(`when consent is '${granted}'`, () => {
    let tree;

    beforeAll(() => {
      setGranted(granted);
      tree = renderer.create(<ArchivePage />);
    });

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
