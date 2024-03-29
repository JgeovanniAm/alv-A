import React, { useContext } from 'react';
import storeContext from '../../settings/context';
import Card from '../cardSelected/';
import './styles.scss';

export default () => {
  const { favorite, removeCard } = useContext(storeContext);
  return (
    <>{
      Array.from(favorite).length > 0 ?
        <div className="products-favorite">
          <h1>My favorites products</h1>
          <div>
            {
              favorite.map((item, index) => (<Card key={index} id="favorite" item={item} func={removeCard} />))
            }
          </div>
        </div>
        :
        <p>no hay products favoritos </p>
    }
    </>
  )
}