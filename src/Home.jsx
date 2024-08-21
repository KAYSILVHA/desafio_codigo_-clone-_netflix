import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import "./assets/styles/globalStyle.scss"
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/auth');
  };

  return (
    <div className='layout'>
      <Header />
      <div>
        <Outlet />
      </div>
      <button onClick={handleLogout}>Sair</button>
      <Footer />
    </div>
  );
}

export default Home;