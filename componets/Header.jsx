import React from 'react';
import Link from './Link';

const Header = () => (
  <div>
    <span className="brand">Hello world</span>
    <Link to="https://jd.com">JD</Link>
    <Link to="http://butler.jd.com">Butler</Link>
    <Link to="http://lrc.jd.com">lrc</Link>
  </div>
);

export default Header;