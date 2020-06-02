import React from 'react';
import renderer from 'react-test-renderer';
import Reason from 'webpage/components/archive/renderer/Reason';

let tree;

[
  'WAISTUICustomAudienceType',
  'WAISTUILocaleType',
  'WAISTUIAgeGenderType',
  'WAISTUILocationType',
  'other'
].forEach(reason => {
  describe(`can render ${reason}`, () => {
    beforeAll(() => {
      tree = renderer.create(<Reason reason={reason} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
