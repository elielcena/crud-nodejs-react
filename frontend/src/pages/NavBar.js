import React from 'react';
import { history } from '../history';

const NavBar = ({ user }) => {
    user = localStorage.getItem('user');

    return (
        <>
            <div className="topnav">
                <a onClick={() => { history.push('/cadastro-produto') }}>Cadastro</a>
                <a onClick={() => { history.push('/consulta-produto') }}>Consulta</a>
                <a onClick={() => {
                    localStorage.removeItem('token-auth');
                    localStorage.removeItem('user');
                    history.push('/');
                }} className="Right">Sair</a>
                <a className="Right">Olá {user}</a>
            </div>
        </>
    );
};

export default NavBar;
