import React, { useState, useEffect, useContext } from 'react';
import ButtonAdd from '../add-btn/index';
import './styles.scss';

export default ({ data, closeWindow }) => {
  const [data_object, Setdata_object] = useState(data.item)
  const [available_C, Setavailable_C] = useState(null)
  const [available_S, Setavailable_S] = useState(null)

  useEffect(() => {
    processFilter();
  }, [data_object]);

  const processFilter = () => {
    const filterColor = data.allData.filter(item => item.name === data_object.name && item.model === data_object.model);
    let bItem = '';
    const filterEndColor = filterColor.filter((item) => {
      if (bItem === item.color);
      else {
        bItem = item.color;
        return item;
      }
    });

    const filterSizes = data.allData.filter(item => item.name === data_object.name && item.model === data_object.model);
    const mapSize = filterSizes.map(item => item.size);
    const filterEndSizes = Array.from(new Set(mapSize));
    Setavailable_S(filterEndSizes);
    Setavailable_C(filterEndColor);
  }

  const actionColorbtn = item => {
    Setdata_object(item)
  }

  const activeSize = ({ target }) => {
    target.style.background = '#b49655';
    target.style.color = 'white';
    setClassState()
    if (target) {
      Setdata_object({ ...data_object, size: target.innerHTML })
    }
  }

  const setClassState = () => {
    const btn = document.querySelectorAll('.info-card__btn-sizes');
    btn.forEach(element => {
      element.style.background = 'white';
      element.style.color = '#b49655';
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
            <h2 className="info-card__name">{data_object.name} </h2>
            <h3 className="info-card__model">{data_object.model} </h3>
            <h3 className="info-card__brand">{data_object.brand} </h3>
            <p className="info-card__description"> {data_object.description}</p>
            <h3 className="info-card__price">price: ${data_object.price}</h3>
            <div className="info-card__wrapper-filter wrapper-color">
              {
                available_C.map((item, index) => (
                  <button className="info-card__btn-color" onClick={() => actionColorbtn(item)} key={index}>
                    <img src={item.url} alt={item.name} />
                  </button>
                ))
              }
            </div>
            <div>
              <h3 className="info-card__model">sizes</h3>
              {
                available_S.map((item, index) => (
                  <button key={index} onClick={activeSize} className="info-card__btn-sizes" >
                    {item}
                  </button>
                ))
              }
            </div>
            <ButtonAdd Card={data_object} typeBtn="car" inner="add to bag" />
            <ButtonAdd Card={data_object} typeBtn="favourite" inner="favourite ♥" />
          </div>
          <button onClick={closeWindow} className="info-card__come-back">comeback</button>
        </div>
        :
        <p>no se cargó compa</p>
      }
    </>
  )
}