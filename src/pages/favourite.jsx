import React, { useContext } from 'react';
import Layout from '../layout/';
import Main from '../sections/main';
import storeContext from '../settings/context';
import './styles.scss';

export default () => { 
  const { favorite } = useContext(storeContext);
  console.log(favorite)
  return(
  <>
    <Layout>
      <Main>
        favorite
        {JSON.stringify(favorite)}
      </Main>
    </Layout>
  </>
)}