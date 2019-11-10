import React from 'react';
import './styles.scss';

export default ({targetView}) => (
  <section className="filter-wrapper">
    <h2 className="filter-wrapper__title">Alv-A store / this is ALVA-A skate and x*xkiss</h2>
    <div className="filter-wrapper__tabs">
      <ul className="filter-wrapper__list">
        <li className="filter-wrapper__item">
          <button onClick={targetView} id="all">all</button>
        </li>
        <li className="filter-wrapper__item">
          <button onClick={targetView} id="sweatshirts">sweatshirts</button>
        </li>
        <li className="filter-wrapper__item">
          <button onClick={targetView} id="jacket">jacket</button>
        </li>
        <li className="filter-wrapper__item">
          <button onClick={targetView} id="shoes">shoes</button>
        </li>
      </ul>
    </div>
  </section>
)