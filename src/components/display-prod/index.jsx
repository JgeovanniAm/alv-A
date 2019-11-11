import React, { useState, useEffect } from 'react';
import TabBrand from '../tab-brands/';
import mydata from '../../settings/data/provider.json';
import Card from '../card/'
import './styles.scss';
// my view of products
export default ({ view }) => {
  const data_Unit = [...mydata.alv_a.shoes, ...mydata.alv_a.sweatshirts, ...mydata.alv_a.jacket];
  const [typeData, setypeData] = useState([]);
  const [filterBrand, setfilterBrand] = useState([]);
  const  [viewBrand, setviewBrand] = useState('all');
  useEffect(() => {
    if (view === 'all') modelFilter(data_Unit);
    else if (view === 'sweatshirts') modelFilter(mydata.alv_a.sweatshirts);
    else if (view === 'shoes') modelFilter(mydata.alv_a.shoes);
    else if (view === 'jacket') modelFilter(mydata.alv_a.jacket);
    setviewBrand('all');
    function modelFilter(data) {
      let bItem = "";
      const filter = data.filter((item) => {
        if (bItem === item.model);
        else {
          bItem = item.model;
          return item;
        }
      });
      setypeData(filter);
    }
  }, [view]);

  const targetBrand = ({target}) => {
    const brand = typeData.filter(item => item.brand == target.id);
    setviewBrand(target.id);
    setfilterBrand(brand);
  }

  return (
    <section className="display-prod">
      {
        view === 'all' ?
          <div className="wrapper-prod">
            {
              typeData.map((item, index) => <Card key={index} result={item} />)
            }
          </div>
          :
          <>
            <TabBrand funcBrand={targetBrand} result={typeData} />
            <div className="wrapper-prod">
            {
              viewBrand == 'all' ?
                typeData.map((item, index) => <Card key={index} result={item} />)
                :
                filterBrand.map((item, index) => <Card key={index} result={item} />)
            }
            </div>
          </>
      }
    </section>
  )
}