import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Path
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Proyectos from './Components/Proyectos/Proyectos';
//Path

import ProyectoState from './Context/Proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/nueva-cuenta' element={<NuevaCuenta/>} />
        <Route path='/proyectos' element={<Proyectos/>} /> 
        </Routes>
      </Router>
   </ProyectoState>
  );
}

export default App;
