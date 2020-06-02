import React from 'react';
import renderer from 'react-test-renderer';
import useConsent from 'common/hooks/useConsent';
import proceed from 'common/utils/proceed';

import ConsentAwareView from 'common/components/ConsentAwareView';

jest.mock('common/hooks/useConsent');
jest.mock('common/utils/proceed');

const granted = 'current';

beforeAll(() => {
  useConsent.mockReturnValue({ granted });
});

const doTest = okay => {
  describe(`when ${okay ? 'okay' : 'not okay'}`, () => {
    let tree;
    beforeAll(() => {
      proceed.mockReturnValue(okay);
      // the values supplied here do not matter as the decision to display or not is being
      // made by the proceed function which we mock here.
      tree = renderer.create(
        <ConsentAwareView whenGrantedIs="none">
          <div>Hello There</div>
        </ConsentAwareView>
      );
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
};

[true, false].forEach(doTest);
