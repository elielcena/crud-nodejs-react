import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

class SubConsulta extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete('http://localhost:8282/produtos/' + this.props.obj._id)
      .then(async (res) => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto Excluido Com Sucesso!',
          showConfirmButton: false,
          timer: 2500
        });
        window.location.reload();
      }
      ).catch(err => Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Erro ao Excluir Produto!',
        html: 'Tente Novamente!',
        showConfirmButton: false,
        timer: 2500
      }));
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.nome}
        </td>
        <td>
          {this.props.obj.descricao}
        </td>
        <td>
          {this.props.obj.valor}
        </td>
        <td>
          <Link to={"/alterar/" + this.props.obj._id} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default SubConsulta;