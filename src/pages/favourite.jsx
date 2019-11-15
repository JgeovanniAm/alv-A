import React from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import CarSelectedFav from '../components/card-favorite/';
import './styles.scss';

export default () => (
  <>
    <Layout>
      <Main>
      <CarSelectedFav />
      </Main>
    </Layout>
  </>
)