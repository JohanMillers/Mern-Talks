import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Path
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Proyectos from './Components/Proyectos/Proyectos';
//Path

function App() {
  return (
   <Router>
     <Routes>
     <Route path='/' element={<Login/>} />
     <Route path='/nueva-cuenta' element={<NuevaCuenta/>} />
     <Route path='/proyectos' element={<Proyectos/>} /> 
    </Routes>
   </Router>
  );
}

export default App;
