import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import Button from '../componets/Button';


describe('Button', () => {
  it('should be throttled to 200ms', () => {
    const testInstance = ReactTestUtils.renderIntoDocument(<Button>hello</Button>);
    const buttonDom = ReactTestUtils.findRenderedDOMComponentWithClass(testInstance, 'my-button');
    ReactTestUtils.Simulate.click(buttonDom);
    expect(testInstance.state.disabled).toBeTruthy();
    jest.advanceTimersByTime(199);
    expect(testInstance.state.disabled).toBeTruthy();
    jest.advanceTimersByTime(1);
    expect(testInstance.state.disabled).toBeFalsy();
  });

  it('should call onClick callback if provided', () => {
    const onClickMock = jest.fn();
    const testInstance = ReactTestUtils.renderIntoDocument(
      <Button onClick={onClickMock}>hello</Button>
    );
    const buttonDom = ReactTestUtils.findRenderedDOMComponentWithClass(testInstance, 'my-button');
    ReactTestUtils.Simulate.click(buttonDom);
    expect(onClickMock).toHaveBeenCalled();
  });
});