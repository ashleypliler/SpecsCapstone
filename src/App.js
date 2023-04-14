import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/pages/About';
import Help from './components/pages/Help';
import Home from './components/pages/Home';
import Login from './components/pages/login';
import Menu from './components/pages/Menu';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import ScrollToTop from './components/scrollToTop';
import Register from './components/pages/Register';

function App() {

  return (
    <div>
      <Navbar></Navbar>
        <ScrollToTop/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
