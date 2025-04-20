import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { HomeLayout } from './layouts/HomeLayout'
import { Publicar } from './pages/Publicar'
import { EditarPerfil } from './pages/EditarPerfil'
import { Perfil } from './pages/Perfil'
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/" element={<HomeLayout />} >
                <Route path="/home" element={<Home />} />
                <Route path="/post" element={<Publicar />} />
                <Route path="/edit" element={<EditarPerfil />} />
                <Route path="/profile" element={<Perfil />} />
            </Route>

        </Routes>
    )

}   