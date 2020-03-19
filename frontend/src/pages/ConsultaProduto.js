import React, { useState, useEffect } from 'react';
import { history } from '../history';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from './NavBar';

const Produto = () => {

    let [produtos, setProdutos] = useState([]);

    async function getInitialValues() {
        try {
            const response = await axios.get('http://localhost:8282/produtos');
            setProdutos(response.data);
        } catch (err) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Erro ao Buscar Produto!',
                html: 'Tente Novamente!',
                showConfirmButton: false,
                timer: 3000
            });
        }
    }

    const [initialValues, setInitialValues] = useState();

    useEffect(() => {
        getInitialValues().then(res => setInitialValues(res))
    }, []);

    return (
        <>
            <NavBar />
            <div className="Container">
                <div className="Header">
                    <h2>Consulta Produto</h2>
                </div>
                <div className="Form70">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        {
                            produtos.map(prod => (
                                <tbody>
                                    <tr>
                                        <td>{prod.nome}</td>
                                        <td>{prod.valor}</td>
                                        <td>{prod.descricao}</td>
                                        <td>
                                            <a className="Btn-Editar" onClick={() => { history.push('/editar-produto/' + prod._id) }}>Editar</a>
                                            <a className="Btn-Excluir">Excluir</a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
};

export default Produto;