import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Car from './pages/car';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/car" component={Car} />
            </Switch>
        </BrowserRouter>
    )
}
export default App