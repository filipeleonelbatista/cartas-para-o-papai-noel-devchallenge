import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoImg from '../images/icon.png';

import '../styles/components/sidebar.css';

export default function Sidebar() {
    
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <img src={logoImg} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}