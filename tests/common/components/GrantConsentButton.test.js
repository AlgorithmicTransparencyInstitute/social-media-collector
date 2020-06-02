import React from 'react';
import renderer from 'react-test-renderer';
import useConsent from 'common/hooks/useConsent';
import useNavigation from 'common/hooks/useNavigation';
import { mount } from 'enzyme';

import GrantConsentButton from 'common/components/GrantConsentButton';

jest.mock('common/hooks/useConsent');
jest.mock('common/hooks/useNavigation');

const label = 'some label';
const to = 'some-tab';

const saveConsent = jest.fn();
const goto = jest.fn();

const cleanup = () => {
  useConsent.mockClear();
  saveConsent.mockClear();
  goto.mockClear();
};

const doTest = granted => {
  describe(`when granted is '${granted || 'null'}'`, () => {
    describe('check rendering', () => {
      let tree;

      beforeAll(() => {
        useConsent.mockReturnValue({ granted, saveConsent });
        useNavigation.mockReturnValue({ goto });
      });

      afterAll(cleanup);

      describe('when there is no to prop supplied', () => {
        beforeAll(() => {
          tree = renderer.create(<GrantConsentButton label={label} />);
        });

        it('renders correctly', () => {
          expect(tree).toMatchSnapshot();
        });
      });

      describe('when there is a to prop', () => {
        beforeAll(() => {
          tree = renderer.create(<GrantConsentButton label={label} to={to} />);
        });

        afterAll(cleanup);

        it('renders correctly', () => {
          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
};

[null, 'none', 'old', 'current'].forEach(doTest);

describe('check action', () => {
  beforeAll(() => {
    useConsent.mockReturnValue({ granted: 'none', saveConsent });
    useNavigation.mockReturnValue({ goto });
  });

  describe('when there is a to prop', () => {
    beforeAll(() => {
      const wrapper = mount(<GrantConsentButton label={label} to={to} />);
      wrapper.find('button').simulate('click');
    });

    afterAll(cleanup);

    it('called saveConsent', () => {
      expect(saveConsent).toHaveBeenCalled();
    });

    it('called goto with the to value', () => {
      expect(goto).toHaveBeenCalledWith(to);
    });
  });

  describe('when there is not a to prop', () => {
    beforeAll(() => {
      const wrapper = mount(<GrantConsentButton label={label} />);
      wrapper.find('button').simulate('click');
    });

    afterAll(cleanup);

    it('called saveConsent', () => {
      expect(saveConsent).toHaveBeenCalled();
    });

    it('did not call goto', () => {
      expect(goto).not.toHaveBeenCalled();
    });
  });
});
