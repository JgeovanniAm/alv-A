import React, { useState, useEffect } from 'react';
import ButtonAdd from '../add-btn/index';
import './styles.scss';

export default ({ data, closeWindow }) => {
  const [data_object, Setdata_object] = useState(data.item);
  // available color 
  const [available_C, Setavailable_C] = useState(null);
  // available sizes 
  const [available_S, Setavailable_S] = useState(null);
  // it must get the size to completed the next functions
  const [validator, setValidator] = useState(false);

  useEffect(() => {
    processFilterColor();
    processFilterSize();
  }, [data_object]);

  const processFilterColor = () => {
    const filterColor = data.allData.filter(item => item.name === data_object.name && item.model === data_object.model);
    let bItem = '';
    const filterEndColor = filterColor.filter((item) => {
      if (bItem === item.color);
      else {
        bItem = item.color;
        return item;
      }
    });
    filterEndColor ? Setavailable_C(filterEndColor) : console.log('error with processFilterColor');
  }

  const processFilterSize = () => {
    const filterSizes = data.allData.filter(item => item.name === data_object.name && item.model === data_object.model);
    const mapSize = filterSizes.map(item => item.size);
    const filterEndSizes = Array.from(new Set(mapSize));
    Setavailable_S(filterEndSizes);
    filterEndSizes ? Setavailable_S(filterEndSizes) : console.log('error with processFilterSize');
  }


  const activeSize = ({ target }) => {
    setClassState();
    target.style.color = 'white';
    target.style.background = '#c5a254';
    Setdata_object({ ...data_object, size: target.innerHTML });
    setValidator(true);
  }

  const setClassState = () => {
    const btn = document.querySelectorAll('.info-card__btn-sizes');
    btn.forEach(element => {
      element.style.color = '#c5a254';
      element.style.background = 'white';
    });
  }

  return (
    <>
      {available_C && available_S ?
        <div className="info-card">
          <div className="info-card__wrapper-img">
            <img className="info-card__img" src={data_object.url} alt="hola" />
          </div>
          <div className="info-card__wrapper-txt">
            <button
              onClick={closeWindow}
              className="info-card__come-back">
              comeback
            </button>
            <h2 className="info-card__name">{data_object.name} </h2>
            <h3 className="info-card__model">{data_object.model} </h3>
            <h3 className="info-card__brand">{data_object.brand} </h3>
            <p className="info-card__description"> {data_object.description}</p>
            <h3 className="info-card__price">price: ${data_object.price}</h3>
            <div className="info-card__wrapper-filter wrapper-color">
              {
                available_C.map((item, index) => (
                  <button className="info-card__btn-color" onClick={() => Setdata_object(item)} key={index}>
                    <img src={item.url} alt={item.name} />
                  </button>
                ))
              }
            </div>
            <div>
              <h3 className="info-card__model">sizes</h3>
              {
                available_S.map((item, index) => (
                  <button key={index} className="info-card__btn-sizes" onClick={activeSize}>{item}</button>
                ))
              }
            </div>
            <ButtonAdd Card={validator ? data_object : null} typeBtn="car" inner="add to bag" />
            <ButtonAdd Card={validator ? data_object : null} typeBtn="favourite" inner="favourite ♥" />
          </div>
        </div>
        :
        <p>no se cargó compa</p>
      }
    </>
  )
}