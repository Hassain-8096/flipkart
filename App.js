import React from 'react';
import './App.css';
import FlipkartClone from './FlipkartClone';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Grocery from './Grocery';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div >
  
    <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<FlipkartClone />} />
    <Route path="/grocery" element={<Grocery />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
  
   
  
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
