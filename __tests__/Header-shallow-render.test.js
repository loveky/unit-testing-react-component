import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../componets/Header';
import Link from '../componets/Link';

describe('Header', () => {
  it('should render a top level div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
  });

  it('should render 3 Link', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();
    const childrenLink = result.props.children.filter(c => c.type === Link);
    expect(childrenLink.length).toBe(3);
  });
});