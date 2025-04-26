/* src/componentes */
import React from 'react';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import { Route, Routes } from 'react-router-dom';  // Usar Routes en lugar de Switch
//componentes navbar 

import Localizacion from "./componentes/Localizacion"
import Vercarta from './componentes/VerCarta';
import Historia from "./componentes/Historia"
import Reserva from "./componentes/Reserva"
import Register from './componentes/Register';
import Login from "./componentes/Login"

const App = () => {
  return (
    <div className="app">
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Localizacion" element ={<Localizacion/>} />
        <Route path="/VerCarta" element ={<Vercarta/>} />
        <Route path ="/Historia" element ={<Historia/>} />
        <Route path ="/Reserva" element ={<Reserva/>} />
        <Route path ="/Register" element ={<Register/>} />
        <Route path ="/Login" element ={<Login/>} />
       </Routes>
    </div>
  );
};

export default App;



