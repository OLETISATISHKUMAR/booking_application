import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from '../components/Header'
import Login from '../pages/Login'
import Register from '../pages/Register'
function AppRoutes() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default AppRoutes