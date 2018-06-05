import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../componets/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should be throttled to 200ms', () => {
    const wrapper = mount(<Button>hello</Button>);
    wrapper.find('.my-button').simulate('click');
    expect(wrapper.state('disabled')).toBeTruthy();
    jest.advanceTimersByTime(199);
    expect(wrapper.state('disabled')).toBeTruthy();
    jest.advanceTimersByTime(1);
    expect(wrapper.state('disabled')).toBeFalsy();
  });

  it('should call onClick callback if provided', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button onClick={onClickMock}>hello</Button>);
    wrapper.find('.my-button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});