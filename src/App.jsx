import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import './App.css';
import NavBar from './Components/NavBar';
import FavCard from './Components/FavCard';
import Cart from './Components/Cart';
import Success from './Components/Success';
import NotFound from './Components/notFound';
import { MutatingDots } from 'react-loader-spinner';

const App = () => {
  return (
    <div  className=''>
      <NavBar />
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/fav' element={<FavCard/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App