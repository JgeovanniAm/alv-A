import React from 'react';
import './styles.scss';

export default ({ result }) => {
  return (
    <div className="card">
      <div className="card__wrapper-img">
        <img className="card__img" src={result.url} alt={result.model} />
      </div>
      <h3 className="card__title">{result.name}</h3>
      <h3 className="card__sub-title">{result.brand}</h3>
      <h3 className="card__price">${result.price}</h3>
    </div>
  )
}