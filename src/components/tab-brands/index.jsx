import React from 'react';
import './styles.scss';

export default () => {
  //hacer un filter y poner el nombre de marcas que hay en el filtro ejemplo 
  // shoes hay tal marcas y hacer filtro y meterlo en los tab-brand de los disponibles
  return (
    <div className="filter-wrapper__tabs-brands">
      <ul className="filter-wrapper__list-brand">
        <li className="filter-wrapper__item-brand">
          <button>nike...</button>
        </li>
        <li className="filter-wrapper__item-brand">
          <button>nike...</button>
        </li>
        <li className="filter-wrapper__item-brand">
          <button>nike...</button>
        </li>
      </ul>
    </div>
  )
}