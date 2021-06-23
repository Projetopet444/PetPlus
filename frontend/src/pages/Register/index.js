import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            city,
            uf,
        };

        try {
            const response = await api.post('users', data);

            alert(`Seja bem-vindo ${response.data.name}, faça login para continuar!!!`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>

                    <p>Faça seu cadastro, entre na plataforma e acesse
                        todas as informações do seu Pet.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#6f2400" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form name="formUser" onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
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


                    <div className="input-group">

                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />

                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            required
                        />
                    </div>

                    <button className="button" onclick="validate" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );

}
