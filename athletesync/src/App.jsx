import React from 'react';
import 'vite/modulepreload-polyfill'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './IniciosSesiones/InicioAdm';
import InicioUsuarios from './IniciosSesiones/InicioUsuario';
import CreacionUsuario from './IniciosSesiones/CreacionUsuario';
import ConfAdm from './IniciosSesiones/Configuracion';
import CompetenciasCreadas from './SeccionesAdm/CompetenciasCreadas';
import CrearCompetencia from './SeccionesAdm/CrearCompetencia';
import Ganadores from './SeccionesAdm/Ganadores';
import CompetenciasDisponibles from './SeccionesUsuarios/CompetenciasDisponibles';
import CompetenciasFinalizadas from './SeccionesUsuarios/CompetenciasFinalizadas';
import RegistroAthletas from './SeccionesUsuarios/RegistroAthletas';

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioAdmin  />} />
        <Route path='/usuarios' element={<InicioUsuarios  />} />
        <Route path='/crearUsuario' element={<CreacionUsuario  />} />
        <Route path='/configuracion' element={<ConfAdm  />} />
        <Route path='/crearCompetencia' element={<CrearCompetencia  />} />
        <Route path='/competencias' element={<CompetenciasCreadas  />} />
        <Route path='/ganadores' element={<Ganadores  />} />
        <Route path='/competenciasDisponibles' element={<CompetenciasDisponibles  />} />
        <Route path='/competenciasFinalizadas' element={<CompetenciasFinalizadas  />} />
        <Route path='/registroAthletas' element={<RegistroAthletas  />} />

      </Routes> 
    </BrowserRouter> 
  )
}

export default App
