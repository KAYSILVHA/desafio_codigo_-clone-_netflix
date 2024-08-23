import React from 'react';
import { Outlet } from 'react-router-dom';

import "./assets/styles/globalStyle.scss"
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

function Home() {

  return (
    <div className='layout'>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home;