import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './SubConsulta';
import Swal from 'sweetalert2';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { produtos: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:8282/produtos')
      .then(response => {
        this.setState({ produtos: response.data });
      })
      .catch(async () => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto Salvo Com Sucesso!',
          showConfirmButton: false,
          timer: 2500
        });
      })
  }

  tabRow() {
    return this.state.produtos.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Consultar Produto</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th colSpan="2">Ação</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}