import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import petsImg from '../../assets/fotopet.png';

export default function PhotoPet() {
    return (
        <div className="photo-pet-container">
            <div className="content">
                <section>
                    <img src={petsImg} alt="Pet Plus" />

                    <h2>Adicione uma foto do seu Pet!</h2>
                    <p>Você pode adicionar ou não uma foto do pet a ser cadastrado para prosseguir com a finalização do cadastro.</p>

                    <Link className="back-link" to="/pets/new">
                        <FiArrowLeft size={16} color="#6f2400" />
                        Voltar para Cadastro
                    </Link>

                    <form>
                    <button className="button" type="submit">Finalizar Cadastro</button>
                    </form>
                </section>
            </div>
        </div>
    )
}