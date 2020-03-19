import React from 'react';
import { Router, Switch, Route } from 'react-router';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import ConsultaProduto from '../pages/ConsultaProduto';
import CadastroProduto from '../pages/CadastroProduto';
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada';

import PrivateRoute from './privateRouter';

import { history } from '../history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Cadastro} exact path="/cadastro" />
            <PrivateRoute component={ConsultaProduto} exact path="/consulta-produto" />
            <PrivateRoute component={CadastroProduto} exact path="/cadastro-produto/" />
            <PrivateRoute component={CadastroProduto} exact path="/editar-produto/:id" />

            <Route component={PaginaNaoEncontrada} />
        </Switch>
    </Router>
);

export default Routes;