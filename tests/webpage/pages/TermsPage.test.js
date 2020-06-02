import React from 'react';
import renderer from 'react-test-renderer';
import TermsPage from 'webpage/pages/TermsPage';

import useConsent from 'common/hooks/useConsent';

import { setGranted } from 'common/components/ConsentAwareView';

jest.mock('common/components/ConsentAwareView');
jest.mock('common/components/GrantConsentButton');
jest.mock('common/hooks/useConsent');

['none', 'old', 'current'].forEach(granted => {
  describe(`when consent is '${granted}'`, () => {
    let tree;

    const viewedConsent = jest.fn();

    beforeAll(() => {
      useConsent.mockReturnValue({ viewedConsent });
      setGranted(granted);
      tree = renderer.create(<TermsPage />);
    });

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
