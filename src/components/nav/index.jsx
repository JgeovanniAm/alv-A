import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import storeContext from '../../settings/context';
import car from '../../img/carrito.png'
import './styles.scss';

export default () => {
  const { cardBag }  = useContext(storeContext);
  return (
    <nav className="nav">
      <ul className="nav__list-nav">
        <li>
          <NavLink exact className="nav__link" activeClassName="nav__link--active" to="/">home</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" activeClassName="nav__link--active" to="/product">products</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" activeClassName="nav__link--active" to="/video">videos</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" activeClassName="nav__link--active" to="/car">
            <img className="car" src={car} alt="car" />
            <span className="counter">{cardBag.length}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link heart" activeClassName="nav__link--active" to="/favourite">
            ♥
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}