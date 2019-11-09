import React from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import HeroBanner from '../components/herobanner/'
import './styles.scss';

export default () => (
  <>
    <Layout>
      <Main>
      <HeroBanner />
      </Main>
    </Layout>
  </>
)