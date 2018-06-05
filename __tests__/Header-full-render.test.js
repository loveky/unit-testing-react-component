import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from '../componets/Header';
import Link from '../componets/Link';

describe('Header', () => {
  it('should render 3 a tag with className "my-link"', () => {
    const testRenderer = TestRenderer.create(<Header />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'a' && node.props.className === 'my-link')).toHaveLength(3);
  });
});