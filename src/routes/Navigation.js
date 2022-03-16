import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { HeroeScreen } from '../components/HeroeScreen'
import { Favoritos } from '../pages/Favoritos'
import { Inicio } from '../pages/Inicio'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Marvel API</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Inicio />} />

                <Route path="favoritos" element={<Favoritos />} />

                <Route path="heroe/:heroeID" element={<HeroeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
