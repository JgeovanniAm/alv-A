import React from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import CarSelectedCar from '../components/card-car/';
import './styles.scss';

export default () => (
  <>
    <Layout>
      <Main>
        <CarSelectedCar />
      </Main>
    </Layout>
  </>
)