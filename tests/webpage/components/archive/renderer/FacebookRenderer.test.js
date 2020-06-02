import React from 'react';
import renderer from 'react-test-renderer';
import FacebookRenderer from 'webpage/components/archive/renderer/FacebookRenderer';

const contentHtml = '<div>Hello world</div>';

const base = {
  id: '1234566789',
  itemId: 'abcdefghijklm',
  payload: { contentHtml }
};

let tree;

describe('when post is an ad', () => {
  describe('when it has adTargetingData', () => {
    describe('when it is a boosted ad', () => {
      const adTargetingData = {
        data: {
          waist_targeting_data: [{ __typename: 'test' }],
          waist_is_marketplace_boosted_listing: true
        }
      };

      const item = { base, payload: { ...base.payload, adTargetingData } };

      beforeAll(() => {
        tree = renderer.create(<FacebookRenderer item={item} />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when it is not a boosted ad', () => {
      const adTargetingData = {
        data: {
          waist_targeting_data: [{ __typename: 'test' }],
          waist_is_marketplace_boosted_listing: false
        }
      };

      const item = { base, payload: { ...base.payload, adTargetingData } };

      beforeAll(() => {
        tree = renderer.create(<FacebookRenderer item={item} />);
      });

      it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('when it has no adTargetingData', () => {
    const item = { base, payload: { ...base.payload } };

    beforeAll(() => {
      tree = renderer.create(<FacebookRenderer item={item} />);
    });

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
