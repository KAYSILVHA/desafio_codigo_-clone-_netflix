import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home.jsx"
import Login from '../Components/Pages/Login/Login.jsx';
import ProtectedRoute from '../Services/ProtectedRoute .jsx';

import Movies from "../Components/Pages/Movies/Movies.jsx"
import Series from "../Components/Pages/Series/Series.jsx"


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Login />} />
                <Route
                    path="/home"
                    element={<ProtectedRoute><Home /></ProtectedRoute>}
                />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/" element={<Navigate to="/auth" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;