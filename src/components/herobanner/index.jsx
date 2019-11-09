import React from 'react';
import gif from '../../img/0.gif';
import gif1 from '../../img/1.gif';
import gif2 from '../../img/2.gif';
import gif3 from '../../img/3.gif';
import gif4 from '../../img/7.gif';
import gif5 from '../../img/5.gif';
import gif6 from '../../img/6.gif';
import gif7 from '../../img/4.gif';
import { Link } from 'react-router-dom'
import './styles.scss';

export default () => (
  <>
    <div className="gallery-gif">
      <img src={gif} alt="gif" />
      <img src={gif1} alt="gif" />
      <img src={gif2} alt="gif" />
      <img src={gif3} alt="gif" />
      <img src={gif4} alt="gif" />
      <img src={gif5} alt="gif" />
      <img src={gif6} alt="gif" />
      <img src={gif7} alt="gif" />
    </div>
    <h2 className="herobanner-title">hello, this is ALV-A</h2>
    <Link to="/product" className="btn-products">
      Products
    </Link>
  </>
)