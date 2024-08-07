import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from '../../Layout';
// import Candys from '../Pages/Candys/Candys';
// import Order from '../Pages/Order/Order';
// import Home from '../Pages/Home/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="order" element={<Order />} />
                    <Route path="candys" element={<Candys />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;