import React, { useState, useEffect } from 'react';
import './styles.scss';

export default ({ data, closeWindow }) => {
  const [dataColor, setDataColor] = useState(null);
  // hacer un useEfct que me verique mi state de la data que viene 
  // apenas cae data.item hay que meterlo en un state y los btontes de los colores o sizes cambian el estado y el efrct lo verifica
  useEffect(
    () => {
      setDataColor(data.item);
      processFilter();
    }, [dataColor]
  )
  function processFilter() {
    if (dataColor) {
      const filterColor = data.allData.filter(item => item.name == dataColor.name && item.model === dataColor.model);
      console.log(filterColor)
      const extraccolor = filterColor.map(item => item.color);
      const color = [...new Set(extraccolor)];
      console.log(color);
    }
  }
  return (
    <>
      {dataColor &&
        <div className="info-card">
          <div className="info-card__wrapper-img">
            <img className="info-card__img" src={dataColor.url} alt="hola" />
          </div>
          <div className="info-card__wrapper-txt">
            <h2 className="info-card__name">{dataColor.name} </h2>
            <h3 className="info-card__model">{dataColor.model} </h3>
            <h3 className="info-card__brand">{dataColor.brand} </h3>
            <p className="info-card__description"> {dataColor.description}</p>
            <h3 className="info-card__price">price: ${dataColor.price}</h3>
            <div className="info-card__wrapper-color">
              <h2 className="info-card__color">red</h2>
            </div>
          </div>
          <button onClick={closeWindow} className="info-card__come-back">comeback</button>
        </div>
      }
    </>
  )
}