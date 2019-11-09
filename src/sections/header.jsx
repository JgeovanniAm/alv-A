import React from 'react';
import Nav from '../components/nav/';
import logo from '../img/x.jpg';
import './styles.scss';
export default () => (
  <section className="header">
    <div className="header__wrapper-jpg">
      <img src={logo} alt="logo"/>
    </div>
    <h1 className="header__title">ALV-A</h1>
    <Nav />
  </section>
)