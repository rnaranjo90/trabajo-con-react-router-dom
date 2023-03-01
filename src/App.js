import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Rey from './Componentes/Rey';
import Error404 from './Componentes/Error404';
import Reyes from './Componentes/Reyes';
import Nav from './Nav';

function App() {
  return (
<BrowserRouter>
<Nav></Nav>
    <Routes>
      <Route path='/' element = {<Rey/>}/>
      <Route path='/reyes/:rey' element = {<Reyes/>}/>
      <Route path='*' element = {<Error404/>}/>
    </Routes>

</BrowserRouter>
  );
}

export default App;
