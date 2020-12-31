import React from 'react';

function Header({ title }) {
  return (
    <header>
      <h1 data-testid="header-title">{title}</h1>
    </header>
  );
}

export default Header;
