import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import petsImg from '../../assets/pets.png';

export default function NewPets() {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('');
    const [breed, setBreed] = useState('');

    const history = useHistory();

    const userId = localStorage.getItem('userId');


    async function handleNewPets(e) {
        e.preventDefault();

        const data = {
            name,
            weight,
            size,
            date,
            color,
            breed,
        };

        try {
            await api.post('pets', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/profile');
        } catch (err) {
            alert('Não foi possivel cadastrar esse caso')
        }
    }

    return (
        <div className="new-pet-container">
            <div className="content">
                <section>
                    <img src={petsImg} alt="Pets" />

                    <h1>Cadastrar novo Pet</h1>

                    <p>Informe os campos obrigatorios para prosseguir com o cadastro do seu Pet.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#6f2400" />
                        Volta para home
                    </Link>
                </section>
                <form onSubmit={handleNewPets}>
                    <input
                        placeholder="Nome do Pet"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Peso | Ex: x,xx"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                        />
                        <input
                            placeholder="Tamanho | Ex: x,xx"
                            value={size}
                            onChange={e => setSize(e.target.value)}
                        />
                    </div>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cor"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        />
                        <input
                            placeholder="Raça"
                            value={breed}
                            onChange={e => setBreed(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Finalizar Cadastro</button>

                </form>
            </div>
        </div>
    );
}