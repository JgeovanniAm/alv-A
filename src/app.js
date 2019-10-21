import React from 'react';
// Switch renderea el primero hijo que haga match , si no hay una ruta definida 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}
export default App