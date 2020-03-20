import React, { Component } from 'react';
import './bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Registro from './components/Registro';
import Cadastro from './components/Cadastro-Produto';
import Alterar from './components/Alterar-Produto';
import Consulta from './components/Consultar-Produto';

import PrivateRoute from './PrivateRoute';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: localStorage.getItem('user') };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Prova GS Crud Produto</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/cadastro'} className="nav-link">Cadastro</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/consulta'} className="nav-link">Consulta</Link>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto navbar-right">
                <li className="nav-item">
                  <label className="nav-link">Olá {this.state.user}</label>
                </li>
                <li className="nav-item">
                  <button onClick={() => {
                    localStorage.removeItem('token-auth');
                    localStorage.removeItem('user');
                    window.location.reload();
                  }} className="nav-link btn btn-light">Sair</button>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/registro' component={Registro} />
            <PrivateRoute exact path='/cadastro' component={Cadastro} />
            <PrivateRoute exact path='/alterar/:id' component={Alterar} />
            <PrivateRoute exact path='/consulta' component={Consulta} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
