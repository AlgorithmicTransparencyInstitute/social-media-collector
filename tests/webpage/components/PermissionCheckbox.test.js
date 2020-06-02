import React from 'react';
import renderer from 'react-test-renderer';
import PermissionCheckbox from 'webpage/components/PermissionCheckbox';
import usePermission from 'common/hooks/usePermission';
import { mount } from 'enzyme';

jest.mock('react-redux');
jest.mock('common/hooks/usePermission');

const label = 'some label';
const storageKey = 'some-key';
const hintText = 'some-hint';

const savePermission = jest.fn();

const doTest = ({ permission: { [storageKey]: { value } = { value: null } } }, disabled) => {
  let tree;

  beforeAll(() => {
    usePermission.mockImplementation(() => ({
      checked: value,
      savePermission
    }));
    tree = renderer.create(
      <PermissionCheckbox
        label={label}
        hintText={hintText}
        storageKey={storageKey}
        disabled={disabled}
      />
    );
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
};

describe('when no permission is loaded', () => {
  doTest({ permission: {} });
});

describe('when a permission is true', () => {
  doTest({ permission: { [storageKey]: { value: true } } });
});

describe('when a permission is false', () => {
  doTest({ permission: { [storageKey]: { value: false } } });
});

describe('when a permission is false and the checkbox is disabled', () => {
  doTest({ permission: { [storageKey]: { value: false } } }, true);
});

describe('actions', () => {
  const value = false;
  const defaultValue = false;
  const newValue = true;
  const evt = { target: { value: newValue } };

  beforeAll(() => {
    usePermission.mockImplementation(() => ({
      checked: value,
      savePermission
    }));
    const component = mount(
      <PermissionCheckbox
        label={label}
        hintText={hintText}
        storageKey={storageKey}
        defaultValue={defaultValue}
      />
    );
    component.find('input').simulate('change', evt);
  });

  it('called savePermission', () => {
    expect(savePermission).toHaveBeenCalled();
  });
});
