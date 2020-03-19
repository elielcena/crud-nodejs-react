import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { history } from '../history';

const Cadastro = () => {
    const handleSubmit = async (values) => {
        await axios.post('http://localhost:8282/usuarios', values).then(res => {
            history.push('/');
        });
    };

    const validations = yup.object().shape({
        nome: yup.string().required('Informe seu Nome'),
        email: yup.string().email('Email inválido').required('Informe seu Email'),
        senha: yup.string().required('Informe sua Senha'),
    });

    return (
        <>
            <div className="Container">
                <div className="Header">
                    <h1>Formulário de Cadastro</h1>
                </div>
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <Field name="nome" className="Form-Field" placeholder="Nome Completo" />
                            <ErrorMessage component="span" name="nome" className="Form-Error" />
                        </div>
                        <div className="Form-Group">
                            <Field name="email" className="Form-Field" placeholder="Email" />
                            <ErrorMessage component="span" name="email" className="Form-Error" />
                        </div>
                        <div className="Form-Group">
                            <Field name="senha" className="Form-Field" placeholder="Senha" />
                            <ErrorMessage component="span" name="senha" className="Form-Error" />
                        </div>
                        <button className="Form-Button" type="submit" >Salvar</button>
                        <a href="/" className="Form-Button Left">Voltar</a>
                    </Form>
                </Formik>
            </div>
        </>
    )
};

export default Cadastro;