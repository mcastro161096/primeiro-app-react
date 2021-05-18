import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NumeroAleatorio from '../NumeroAleatorio/';
import PaginaBackEnd from '../PaginaBackEnd/';
import PaginaFrontEnd from '../PaginaFrontEnd/';

const Rotas = () => (
<BrowserRouter>
<Switch>
    <Route exact path='/' component={NumeroAleatorio} />
    <Route  path='/front-end' component={PaginaFrontEnd} />
    <Route  path='/back-end' component={PaginaBackEnd} />
</Switch>
</BrowserRouter>
);

export default Rotas;