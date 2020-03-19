import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

import { history } from '../history';

const Login = () => {
    const handleSubmit = async (values) => {
        await axios.post('http://localhost:8282/login', values).then(res => {
            const token = res.data.token;
            const user = res.data.usuario;
            if (token && user) {
                localStorage.setItem('user', user.nome);
                localStorage.setItem('token-auth', token);
                history.push('/consulta-produto');
            }
        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Usuario e/ou Senha Inválidos!',
                showConfirmButton: false,
                timer: 3000
            });
        });
    };

    const cadastro = () => {
        history.push('/cadastro')
    }

    const validations = yup.object().shape({
        email: yup.string().email('Email inválido').required('Informe seu Email'),
        senha: yup.string().required('Informe sua Senha'),
    });

    return (
        <>
            <div className="Login">
                <div className="Header">
                    <h1>Login</h1>
                </div>
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <Field name="email" className="Form-Field" placeholder="Email" />
                            <ErrorMessage component="span" name="email" className="Form-Error" />
                        </div>
                        <div className="Form-Group">
                            <Field name="senha" className="Form-Field" type="password" placeholder="Senha" />
                            <ErrorMessage component="span" name="senha" className="Form-Error" />
                        </div>
                        <button className="Form-Button" type="submit">Entrar</button>
                        <button onClick={cadastro} className="Form-Button Left Btn-Cadastrar">Cadastrar</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
};

export default Login;