import { Outlet } from 'react-router-dom';

import "./assets/style/style.scss"
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Principal from '../Pages/Principal/Principal';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Principal />
      <Footer />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;