import { Outlet } from 'react-router-dom';

import "./assets/style/style.scss"
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <Footer/>
      <Header/>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;