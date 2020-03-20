import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class Registro extends Component {

  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      email: '',
      senha: ''
    }
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeSenha(e) {
    this.setState({
      senha: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha
    };
    axios.post('http://localhost:8282/usuarios', obj)
      .then(async () => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário Salvo Com Sucesso!',
          showConfirmButton: false,
          timer: 2500
        });
        this.props.history.push('/login');
      })
      .catch(err => Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Erro ao Alterar Produto!',
        html: 'Tente Novamente!',
        showConfirmButton: false,
        timer: 2500
      }));
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Registre-se</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.nome}
              onChange={this.onChangeNome}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:  </label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:  </label>
            <input
              type="password"
              className="form-control"
              value={this.state.senha}
              onChange={this.onChangeSenha}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Salvar"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}