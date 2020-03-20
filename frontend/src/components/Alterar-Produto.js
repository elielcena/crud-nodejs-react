import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class Alterar extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      descricao: '',
      valor: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8282/produtos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          nome: response.data.nome,
          descricao: response.data.descricao,
          valor: response.data.valor
        });
      })
      .catch(err => Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Erro ao Buscar Produto!',
        html: 'Tente Novamente!',
        showConfirmButton: false,
        timer: 2500
      }))
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    })
  }
  onChangeValor(e) {
    this.setState({
      valor: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      valor: this.state.valor
    };
    axios.put('http://localhost:8282/produtos/' + this.props.match.params.id, obj)
      .then(async () => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto Alterado Com Sucesso!',
          showConfirmButton: false,
          timer: 2500
        });
        window.location.reload();
      }).catch(err => Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Erro ao Alterar Produto!',
        html: 'Tente Novamente!',
        showConfirmButton: false,
        timer: 2500
      }));

    this.props.history.push('/consulta');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Alterar Produto</h3>
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
            <label>Descrição: </label>
            <input type="text"
              className="form-control"
              value={this.state.descricao}
              onChange={this.onChangeDescricao}
            />
          </div>
          <div className="form-group">
            <label>Valor: </label>
            <input type="number"
              className="form-control"
              value={this.state.valor}
              onChange={this.onChangeValor}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Alterar"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}