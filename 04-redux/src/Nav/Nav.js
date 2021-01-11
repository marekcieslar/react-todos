import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>{' '}
        <li>
          <NavLink to="/deposit" exact>
            Deposit
          </NavLink>
        </li>
        <li>
          <NavLink to="/Withdraw" exact>
            Withdraw
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
