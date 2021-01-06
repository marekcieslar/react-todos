import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import quoteContext from '../contexts/quoteContext';

const activeStyle = {
  color: 'red',
  fontWeight: 'bold',
};

function Header() {
  const [quote] = useContext(quoteContext);

  return (
    <nav>
      <h1>
        <Link to="/">Quotes</Link>
      </h1>
      <span>count: {quote.length}</span>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/quote" activeStyle={activeStyle}>
            Quotes
          </NavLink>
        </li>
        <li>
          <NavLink to="/quote-form" activeStyle={activeStyle}>
            Add quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
