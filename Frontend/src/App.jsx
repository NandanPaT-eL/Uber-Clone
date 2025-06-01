import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/register' element={<UserRegister />}/>
        <Route path='/capreg' element={<CaptainRegister />}/>
        <Route path='/caplog' element={<CaptainLogin />}/>
      </Routes>
    </div>
  )
}

export default App
