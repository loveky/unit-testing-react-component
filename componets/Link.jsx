import React from 'react';

const Link = ({to, children}) => (
  <a className="my-link" href={to} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default Link;