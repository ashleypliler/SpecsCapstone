import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/pages/About';
import Donations from './components/pages/Donations';
import Help from './components/pages/Help';
import Home from './components/pages/Home';
import Login from './components/pages/login';
import Menu from './components/pages/Menu';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/donations' element={<Donations/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
  );
}

export default App;