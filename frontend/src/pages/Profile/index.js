import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo1.png';

import './styles.css'

export default function Profile() {
    const [pets, setPets] = useState([]);

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');



    const history = useHistory();


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setPets(response.data);
        })
    }, [userId]);


    async function handleDeletePet(id) {
        try {
            await api.delete(`pets/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setPets(pets.filter(pet => pet.id !== id));
        } catch (err) {
            alert('Erro ao deletar o pet, tente novamente.');
        }
    }

    function handleLogout() {
        

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="PetPlus" />

                <span>Bem vindo(a), {userName}</span>

                <Link className="button" to="/pets/new">Cadastrar novo pet</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#6f2400" />
                </button>
            </header>

            <h1>Pets cadastrados</h1>

            <ul>
                {pets.map(pet => (
                    <li key={pet.id}>
                        <strong>Nome:</strong>
                        <p>{pet.name}</p>

                        <strong>Data de Nascimento:</strong>
                        <p>{pet.date}</p>

                        <strong>Raça:</strong>
                        <p> {pet.breed}</p>

                        <button onClick={() => handleDeletePet(pet.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}