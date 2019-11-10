import React, { useState, useEffect } from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import Tab from '../components/tab/';
import DisplayProd from '../components/display-prod/';
import './styles.scss';

export default () => {
  const [view, setView ] = useState('all');

  const targetView = ({ target }) => {
    setView(target.id);
  };

  return (
    <>
      <Layout>
        <Main>
          <Tab targetView={targetView} />
          <DisplayProd view={view} />
        </Main>
      </Layout>
    </>
  );
}