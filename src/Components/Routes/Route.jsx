import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../../Home.jsx"
import Login from '../Pages/Login/Login';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;