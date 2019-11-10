import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
// react-spring
import { useTransition, animated } from 'react-spring';
import Home from './pages/Home';
import Products from './pages/product';
import Car from './pages/car';
import Register from './pages/register';
import './index.scss';

function App() {
  // context reactRouter
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" },
  });

  return (
    <>
      {
        transitions.map(({ item, props, key }) => (
          <animated.div className="wrapper" key={key} style={props} >
            <Switch location={item} >
              <Route exact path="/" component={Home} />
              <Route path="/product" component={Products} />
              <Route path="/car" component={Car} />
              <Route path="/register/:status" component={Register} />
            </Switch>
          </animated.div>
        ))
      }
    </>
  )
}
export default App