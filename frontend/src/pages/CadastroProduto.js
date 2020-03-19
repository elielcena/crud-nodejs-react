import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import { history } from '../history';

const Produto = ({ match }) => {

    let [produtos, setProdutos] = useState();

    async function getInitialValues() {
        try {
            const response = await axios.get('http://localhost:8282/produtos/' + match.params.id);
            return setProdutos(response.data);
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

    //--------------------------------------------------------------

    const handleSubmit = async (values) => {
        await axios.post('http://localhost:8282/produtos', values).then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Produto Salvo com Sucesso',
                showConfirmButton: false,
                timer: 3000
            });
        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Erro ao Salvar Produto!',
                html: 'Tente Novamente!',
                showConfirmButton: false,
                timer: 3000
            });
        });
    };

    const validations = yup.object().shape({
        nome: yup.string().required('Informe o Nome do Produto'),
        valor: yup.number().required('Informe o Valor')
    });

    return (
        <>
            <NavBar />
            <div className="Container">
                <div className="Header">
                    <h2>Cadastro Produto</h2>
                </div>
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <h4>Nome:</h4>
                            <Field name="nome" className="Form-Field" placeholder="Nome" />
                            <ErrorMessage component="span" name="nome" className="Form-Error" />
                        </div>
                        <div className="Form-Group">
                            <h4>Valor:</h4>
                            <Field name="valor" className="Form-Field" type="number" placeholder="Valor" />
                            <ErrorMessage component="span" name="valor" className="Form-Error" />
                        </div>
                        <div className="Form-Group">
                            <h4>Descrição:</h4>
                            <Field component="textarea" name="descricao" className="Form-Field" placeholder="Descrição" rows="6" cols="60" />
                            <ErrorMessage component="span" name="descricao" className="Form-Error" />
                        </div>
                        <button className="Form-Button" type="submit">Salvar</button>
                    </Form>
                </Formik>

            </div>
        </>
    )
};

export default Produto;