import React, { useState, useEffect } from 'react';
import TabBrand from '../tab-brands/';
import mydata from '../../settings/data/provider.json';
import Card from '../card/';
import InfoCard from '../infoCard/'
import './styles.scss';

// my view of products
export default ({ view }) => {
  const data_Unit = [...mydata.alv_a.shoes, ...mydata.alv_a.sweatshirts, ...mydata.alv_a.jacket];
  const [typeData, setypeData] = useState([]);
  const [filterBrand, setfilterBrand] = useState([]);
  const [viewBrand, setviewBrand] = useState('all');
  const [Toggle, setToggle] = useState(false);
  const [infoData, setInfoData] = useState({});

  useEffect(() => {
    if (view === 'all') modelFilter(data_Unit);
    else if (view === 'sweatshirts') modelFilter(mydata.alv_a.sweatshirts);
    else if (view === 'shoes') modelFilter(mydata.alv_a.shoes);
    else if (view === 'jacket') modelFilter(mydata.alv_a.jacket);
    // set view brand
    setviewBrand('all');
    // filter models
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

  const targetBrand = ({ target }) => {
    const brand = typeData.filter(item => item.brand === target.id);
    setviewBrand(target.id);
    setfilterBrand(brand);
  }

  const targetInfoCard = data => {
    setToggle(!Toggle);
    setInfoData({item:data, allData: data_Unit})
  }

  return (
    <section className="display-prod">
      {
        Toggle &&
        <>
          <InfoCard closeWindow={()=> setToggle(!Toggle) } data={infoData ? infoData : {}} />
        </>
      }
      {
        view === 'all' ?
          <>
            <div className="description">
              <img src="https://static.super-shop.com/849340-w1920-emerica-tshirt-stay-gold-circle-grey-heather.jpg" alt="skate" />
              <p>is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.</p>
              <img src="https://static.super-shop.com/849342-w1920-emerica-tshirt-stay-gold-circle-grey-heather.jpg" alt="skate" />
            </div>
            <div className="wrapper-prod">
              {
                typeData.map((item, index) => <Card handleClickInfo={targetInfoCard} key={index} result={item} />)
              }
            </div>
          </>
          :
          <>
            <TabBrand funcBrand={targetBrand} result={typeData} />
            <div className="wrapper-prod">
              {
                viewBrand == 'all' ?
                  typeData.map((item, index) => <Card handleClickInfo={targetInfoCard} key={index} result={item} />)
                  :
                  filterBrand.map((item, index) => <Card handleClickInfo={targetInfoCard} key={index} result={item} />)
              }
            </div>
          </>
      }
    </section>
  )
}