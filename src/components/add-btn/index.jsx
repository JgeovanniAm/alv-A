import React, { useContext } from 'react';
import storeContext from '../../settings/context';
import './styles.scss';

export default ({ typeBtn, inner, Card }) => {
  const { addCarFunc } = useContext(storeContext);

  const handleClick = ({ target }) => {
    if (Card && target.id){
      addCarFunc(Card, target.id);
      alert(`have been add a new article to the${inner}`)
    }
    else alert('seleted the options of sizes');
  }
  return (
    <button id={typeBtn} onClick={handleClick} className="addCar">
      {inner}
    </button>
  )
}