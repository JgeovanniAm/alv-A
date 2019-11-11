import React from 'react';
import './styles.scss';

export default ({ result, funcBrand }) => {
  const extracBrand = result.map(item => item.brand);
  const brand = [...new Set(extracBrand)];
  return (
    <div className="filter-wrapper__tabs-brands">
      <ul className="filter-wrapper__list-brand">
        <li key="all" className="filter-wrapper__item-brand">
          <button id="all" onClick={funcBrand}> all </button>
        </li>
        {
          brand.map(brands => (
            <li key={brands} className="filter-wrapper__item-brand">
              <button id={brands} onClick={funcBrand}> {brands} </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}