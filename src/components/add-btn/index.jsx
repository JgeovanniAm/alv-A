import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import storeContext from '../../settings/context';
import Modal from '../modal';
import './styles.scss';

export default ({ typeBtn, inner, Card }) => {
  const { addCarFunc } = useContext(storeContext);
  const [toggle, setToggle] = useState(false);

  const handleClick = ({ target }) => {
    if (Card && target.id) {
      addCarFunc(Card, target.id);
      setToggle(true);
    }
    else alert('seleted the options of sizes');
  }
  return (
    <>
      {
        toggle &&
        <Modal>
          <button
            onClick={()=>{
              setToggle(false);
            }}
            className="info-card__come-back">
            comeback
            </button>
          <h1>Your selected product is stored in the car</h1>
          <Link className="addCar" to="/car">car</Link>
        </Modal>
      }
      <button id={typeBtn} onClick={handleClick} className="addCar">
        {inner}
      </button>
    </>
  )
}