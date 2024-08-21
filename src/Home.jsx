import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./assets/styles/Style.scss"

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/auth');
  };

  return (
    <div>
      <h2>Bem-vindo à Página Inicial</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;