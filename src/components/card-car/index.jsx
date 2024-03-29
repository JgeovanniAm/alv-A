import React, { useContext, useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import storeContext from '../../settings/context';
import Modal from '../modal';
import Card from '../cardSelected/';
import './styles.scss';

export default () => {
  const { cardBag, clearBag, removeCard } = useContext(storeContext);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const priceElement = cardBag.map((item) => item.price);
    if (priceElement.length > 0) setTotal(priceElement.reduce((a, b) => a + b))
  }, [cardBag]);

  const handleToken = (token) => {
    fetch('https://alva-store.herokuapp.com/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token,
        product: cardBag,
      })
    }).then(
      response => {
        setToggle(true);
        console.log(response);
        return response.json()
      }
    ).then(result => {
      console.log(result)
      if(result) clearBag();
    }).catch(
      err => {
        console.log(err);
      }
    )
  }

  // direcion de envio
  // direcion de compras
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
            <h2 className="summary__summary--sub">subtotal</h2>
            <h2 className="summary__summary--disc">discount</h2>
            <h2 className="summary__summary--total">Total</h2>
            <span className="summary__total subtotal">${total}</span>
            <span className="summary__total total">${total}</span>
            <span className="summary__total discount">0%</span>
            <StripeCheckout
              stripeKey="pk_test_ozn787iFjexzaCAmwgYTxged002GSdJAKu"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={total * 100}
            />
            {
              toggle &&
              <Modal>
                <button
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="info-card__come-back">
                  comeback
                </button>
                <h1>payment success</h1>
                <Link className="addCar" to="/products">products</Link>
              </Modal>
            }
          </div>
        </div>
        :
        <p>no hay products </p>
    }
    </>
  )
}