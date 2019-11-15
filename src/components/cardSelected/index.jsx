import React, { useContext, useState, useEffect } from 'react';
import storeContext from '../../settings/context';
import './styles.scss';

export default () => {
  const { cardBag, removeCard } = useContext(storeContext);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    //setTotal(cardBag.reduce((a, b) => a.price + b.price));
    //let i = cardBag.reduce((a, b) => a.price + b.price)
    //console.log(i)
  },[cardBag])
  //console.log(cardBag)
  return (
    <>{
      Array.from(cardBag).length > 0 ?
        <div className="products-car">
          <div className="wrapper-products">
            <h1>My products</h1>
            <div>
              {cardBag.map((item, index) => (
                <div className="wrapper-article-select" key={index}>
                  <div className="wrapper-article-select__wrapper-img">
                    <img className="wrapper-article-select__image" src={item.url} alt={item.name} />
                  </div>
                  <div className="wrapper-article-select__info">
                    <h2 className="wrapper-article-select__name">{item.name}</h2>
                    <h3>{item.model}</h3>
                    <h3>{item.brand}</h3>
                    <h3>Size: {item.size}</h3>
                    <span className="wrapper-article-select__name">${item.price}</span>
                  </div>
                  <div className="wrapper-article-select__controls">
                    <button onClick={ ({target})=> removeCard(item, target.id) } id="bag">x</button>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
          <div className="summary">
            <h1 className="summary__title">alv-a store</h1>
            <h2 className="summary__summary">Total</h2>
            <span className="summary__total">${total}</span>
            <button >checkout</button>
          </div>
        </div>
        :
        <p>no hay products </p>
    }
    </>
  )
}