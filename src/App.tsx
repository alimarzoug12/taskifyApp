import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/register';



import './App.css';

function App() {
  return (
    <div className="App-header" style={{background:"#003249"}}>
     
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
