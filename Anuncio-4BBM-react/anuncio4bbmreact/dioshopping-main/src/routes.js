import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import AnnouncementPage from './Pages/anuncio'

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/prestaranuncio"
                element={<AnnouncementPage />}
            />
        </Routes>
    )
}

export default MainRoutes;
