import React from 'react';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ArchiveTabs from 'webpage/components/archive/ArchiveTabs';

let tree;

const tabs = [
  { name: 'test', label: 'Test', badge: 1, active: true },
  { name: 'alt', label: 'Alt' }
];

const onChange = jest.fn();

describe('render the tabs', () => {
  beforeAll(() => {
    tree = renderer.create(<ArchiveTabs tabs={tabs} onChange={onChange} />);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('actions', () => {
  beforeAll(() => {
    const component = mount(<ArchiveTabs tabs={tabs} onChange={onChange} />);
    component
      .find('button')
      .last()
      .simulate('click');
  });

  it('called onChange', () => {
    expect(onChange).toHaveBeenCalled();
  });
});
