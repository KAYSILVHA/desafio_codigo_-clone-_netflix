import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./assets/styles/Style.scss"
import Layout from './Components/Layout/Layout';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/auth');
  };

  return (
    <div>
      <Layout/>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;