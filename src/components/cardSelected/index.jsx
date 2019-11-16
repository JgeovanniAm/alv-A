import React from 'react';
import './styles.scss';

export default ({ item, func, id }) => (
  <div className="wrapper-article-select">
    <div className="wrapper-article-select__wrapper-img">
      <img className="wrapper-article-select__image" src={item.url} alt={item.name} />
    </div>
    <div className="wrapper-article-select__info">
      <h2 className="wrapper-article-select__name">{item.name}</h2>
      <h3>{item.brand}</h3>
      <h3>Size: {item.size}</h3>
      <span className="wrapper-article-select__name">${item.price}</span>
      <button className="wrapper-article-select__btn" onClick={({ target }) => func(item, target.id)} id={id} >Eliminar</button>
    </div>
  </div>
)