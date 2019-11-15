import React, { useContext, useState, useEffect } from 'react';
import storeContext from '../../settings/context';
import Card from '../cardSelected/';
import './styles.scss';

export default () => {
  const { cardBag, removeCard } = useContext(storeContext);
  const [total, setTotal] = useState(0);
  console.log(cardBag)
  useEffect(() => {
    const priceElement = cardBag.map((item) => item.price);
    if (priceElement.length > 0) setTotal(priceElement.reduce((a, b) => a + b))
  }, [cardBag]);

  return (
    <>{
      Array.from(cardBag).length > 0 ?
        <div className="products-car">
          <div className="wrapper-products">
            <h1>My products</h1>
            <div>
              {
                cardBag.map((item, index) => (<Card id="bag" item={item} func={removeCard} key={index} />))
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