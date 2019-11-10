import React from 'react';
import TabBrand from '../tab-brands/';
import mydata from '../../settings/data/provider.json';
import Card from '../card/'
import './styles.scss';

export default ({ view }) => {
  console.log(view)
  let array = [...mydata.alv_a.shoes, ...mydata.alv_a.sweatshirts, ...mydata.alv_a.jacket]
  let bItem = "";
  let nuevoArray = [];
  let arrayMierd = [];
  array.filter((item, index, data) => {
    if (bItem == item.model) {
      arrayMierd.push(item)
    } else {
      bItem = item.model;
      nuevoArray.push(item);
    }
  })
  console.log(nuevoArray);
  console.log(arrayMierd);
  return (
    <section className="display-prod">
      <TabBrand />
      <div className="wrapper-prod">
        hola
      </div>
    </section>
  )
}