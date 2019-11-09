import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default () => (
  <nav className="nav">
    <ul className="nav__list-nav">
      <li>
        <NavLink exact className="nav__link" activeClassName="nav__link--active" to="/">home</NavLink>
      </li>
      <li>
        <NavLink className="nav__link" activeClassName="nav__link--active" to="/product">products</NavLink>
      </li>
      <li>
        <NavLink className="nav__link" activeClassName="nav__link--active" to="/car">car</NavLink>
      </li>
    </ul>
  </nav>
)