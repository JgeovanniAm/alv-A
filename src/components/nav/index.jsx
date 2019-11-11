import React from 'react';
import { NavLink } from 'react-router-dom';
import car from '../../img/carrito.png'
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
        <NavLink className="nav__link" activeClassName="nav__link--active" to="/car">
          <img className="car" src={car} alt="car" />
        </NavLink>
      </li>
    </ul>
  </nav>
)