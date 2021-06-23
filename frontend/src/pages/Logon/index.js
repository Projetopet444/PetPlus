import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo1.png';
import twoImg from '../../assets/two.png';

export default function Logon() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { email, password });

            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.name);

            history.push('profile');
        } catch (err) {
            alert('Falha no login')
        }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} className="Logo" alt="PetPlus" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        type="email"
                        placeholder="Seu Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#6f2400" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={twoImg} alt="twoimg" />
        </div>
    );
}