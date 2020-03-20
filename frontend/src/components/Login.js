import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      senha: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeSenha(e) {
    this.setState({
      senha: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      senha: this.state.senha
    };
    axios.post('http://localhost:8282/login', obj)
      .then(res => {
        const token = res.data.token;
        const user = res.data.usuario;
        if (token && user) {
          localStorage.setItem('user', user.nome);
          localStorage.setItem('token-auth', token);
          this.props.history.push('/consulta');
          window.location.reload();
        }
      })
      .catch(err => Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuário e/ou Senha Inválidos!',
        html: 'Tente Novamente!',
        showConfirmButton: false,
        timer: 2500
      }));
  }

  render() {
    return (
      <div className="row d-flex justify-content-center" align="center">
        <form onSubmit={this.onSubmit} className="form-signin " style={{ marginTop: 150, width: 600 }} >
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>

          <input
            id="inputEmail"
            type="email"
            className="form-control"
            value={this.state.email}
            onChange={this.onChangeEmail}
            required
          />

          <label htmlFor="inputPassword" className="sr-only">Email address</label>

          <input
            id="inputPassword"
            type="password"
            className="form-control"
            value={this.state.senha}
            onChange={this.onChangeSenha}
            required
          />
          <div class="d-flex justify-content-center mt-3 login_container">
            <input type="submit"
              value="Entrar"
              className="btn btn-primary btn-block" />
          </div>
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Não possui uma conta? <Link to={'/registro'} className="ml-2">Registre-se</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}