import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import './App.css';
import NavBar from './Components/NavBar';
import FavCard from './Components/FavCard';

const App = () => {
  return (
    <div  className=''>
      <NavBar />
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/fav' element={<FavCard/>} />
      </Routes>
    </div>
  )
}

export default App