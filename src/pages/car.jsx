import React from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import CardSelected from '../components/cardSelected/';
import './styles.scss';

export default () => (
  <>
    <Layout>
      <Main>
        <CardSelected />
      </Main>
    </Layout>
  </>
)