import React from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import './styles.scss';

export default ({match}) => (
  <>
    <Layout>
      <Main>
        {match.params.status}
      </Main>
    </Layout>
  </>
)