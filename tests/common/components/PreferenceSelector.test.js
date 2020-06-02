import React from 'react';
import renderer from 'react-test-renderer';
import PreferenceSelector from 'common/components/PreferenceSelector';
import usePreference from 'common/hooks/usePreference';
import { mount } from 'enzyme';

jest.mock('common/hooks/usePreference');

const label = 'some label';
const options = [{ value: 'test', text: 'Test' }];
const storageKey = 'some-key';
const savePreference = jest.fn();

const doTest = ({ preference: { [storageKey]: { value } = { value: undefined } } }) => {
  let tree;

  beforeAll(() => {
    usePreference.mockImplementation(() => ({
      selected: value,
      savePreference
    }));
    tree = renderer.create(
      <PreferenceSelector label={label} options={options} storageKey={storageKey} />
    );
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
};

describe('when no value is selected', () => {
  doTest({ preference: {} });
});

describe('when a value is selected', () => {
  doTest({ preference: { [storageKey]: { value: 'en' } } });
});

describe('actions', () => {
  const newValue = 'new value';
  const evt = { target: { value: newValue } };

  beforeAll(() => {
    usePreference.mockImplementation(() => ({
      selected: undefined,
      savePreference
    }));
    const component = mount(
      <PreferenceSelector label={label} options={options} storageKey={storageKey} />
    );
    component.find('select').simulate('change', evt);
  });

  it('called actions.savePreference', () => {
    expect(savePreference).toHaveBeenCalled();
  });
});
