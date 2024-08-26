import React from 'react';

import "./assets/styles/globalStyle.scss"
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import InitialBanner from './Components/Pages/Banners/InitialBanner';
import Movies from './Components/Pages/Movies/Movies';

function Home() {

  return (
    <div className='layout'>
      <Header />
      <InitialBanner/>
      <Movies/>
      <Footer />
    </div>
  );
}

export default Home;