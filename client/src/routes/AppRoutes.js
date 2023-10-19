import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from '../components/Header'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import Tour from "../pages/Tour"
import About from '../pages/About'
function AppRoutes() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRoutes