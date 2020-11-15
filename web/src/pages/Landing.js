import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.png';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Cartas para o Papai Noel" />
        <main>
          <h1>O Papai Noel aguarda seu pedido</h1>
          <p>Escreva sua carta para o Papai Noel agora!</p>
        </main>
        <div className="location">          
          <Link to="/list" className="red-button">
            Ver Cartas
          </Link>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={24}  color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;