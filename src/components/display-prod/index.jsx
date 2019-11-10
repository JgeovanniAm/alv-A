import React, { useReducer, useEffect } from 'react';
import TabBrand from '../tab-brands/';
import mydata from '../../settings/data/provider.json';
import Card from '../card/'
import './styles.scss';

export default ({ view }) => {
  let bItem = "";
  const data_Unit = [...mydata.alv_a.shoes, ...mydata.alv_a.sweatshirts, ...mydata.alv_a.jacket]
  // reducer my function / default data
  const [state, dispatch] = useReducer(reducer, data_Unit);

  function reducer(state, action) {
    switch (action.type) {
      case 'all':
        return data_Unit;
      case 'sweatshirts':
        return mydata.alv_a.sweatshirts;
      case 'shoes':
        return mydata.alv_a.shoes;
      case 'jacket':
        return mydata.alv_a.jacket;
      default:
        throw new Error();
    }
  }

  // muchas dudas con el useEffect.. sacar la duda con el segundo parámetro
  useEffect(() => {
    dispatch({ type: view });
  }, [view]);

  // filter of my repeating article
  const Filter = state.filter((item) => {
    if (bItem === item.model) console.log('0');
    else {
      bItem = item.model;
      return item;
    }
  })

  return (
    <section className="display-prod">
      {
        view === 'all' ?
          <div className="wrapper-prod">
            {
              Filter.map((item, index) => <Card key={index} result={item} />)
            }
          </div>
          :
          <>
            <TabBrand />
            <div className="wrapper-prod">
              {
                Filter.map((item, index) => <Card key={index} result={item} />)
              }
            </div>
          </>
      }
    </section>
  )
}