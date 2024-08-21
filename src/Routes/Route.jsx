import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home.jsx"
import Login from '../Components/Pages/Login/Login.jsx';
import ProtectedRoute from '../Services/ProtectedRoute .jsx';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Login />} />
                <Route
                    path="/home"
                    element={<ProtectedRoute><Home /></ProtectedRoute>}
                />
                <Route path="/" element={<Navigate to="/auth" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;