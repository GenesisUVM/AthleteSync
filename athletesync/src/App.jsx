import React from 'react';
import 'vite/modulepreload-polyfill'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './IniciosSesiones/InicioAdm';
import InicioUsuarios from './IniciosSesiones/InicioUsuario';
import CreacionUsuario from './IniciosSesiones/CreacionUsuario';
import ConfAdm from './IniciosSesiones/Configuracion';


function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioAdmin  />} />
        <Route path='/usuarios' element={<InicioUsuarios  />} />
        <Route path='/crearUsuario' element={<CreacionUsuario  />} />
        <Route path='/configuracion' element={<ConfAdm  />} />

      </Routes> 
    </BrowserRouter> 
  )
}

export default App
