import React, { useContext } from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import storeContext from '../settings/context';
import './styles.scss';

export default () => { 
  const { cardBag } = useContext(storeContext);
  console.log(cardBag)
  return(
  <>
    <Layout>
      <Main>
        favorite
        {JSON.stringify(cardBag)}
      </Main>
    </Layout>
  </>
)}