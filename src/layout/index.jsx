import React from 'react';
import Header from '../sections/header';
import './styles.scss';

export default ({children}) => (
  <>
    <Header />
    {children}
  </>
)