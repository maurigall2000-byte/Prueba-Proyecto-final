import { useState } from 'react'
import {NavLink, Route, Routes } from 'react-router'
import HomeScreen from './assets/HomeScreen'
import AboutScreen from './AboutScreen'
import ContactScreen from './ContactScreen'
import "./nav.css"
import ProductDetailScreen from './assets/ProductDetailScreen'

function App() {

  return (
      <div>
        <header>
          <h2>BranName</h2>
          <nav className='prueba'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/about" element={<AboutScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
          <Route path='/product/:product_id' element={<ProductDetailScreen/>}/>
        </Routes>
        
      </div>
      
  )
}

export default App

