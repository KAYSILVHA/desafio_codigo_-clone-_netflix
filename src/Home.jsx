import React from 'react';

import "./assets/styles/globalStyle.scss"
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import InitialBanner from './Components/Pages/Banners/InitialBanner';

function Home() {

  return (
    <div className='layout'>
      <Header />
      <InitialBanner/>
      <Footer />
    </div>
  );
}

export default Home;