import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../../pages/Home'
import MasterAuth from '../../pages/MasterAuth'
import Login from '../../pages/PersonalAccount/Login'
import NewUserSign from '../../pages/PersonalAccount/NewUserSign'
import ResetPass from '../../pages/PersonalAccount/ResetPass'
import Signup from "../../pages/PersonalAccount/Signup";
import UpdatePass from '../../pages/PersonalAccount/UpdatePass'

import BLogin from '../../pages/BusinessAccount/BLogin'
import SignUp1 from '../../pages/BusinessAccount/SignUp1'
import SignUp2 from '../../pages/BusinessAccount/SignUp2'
import SignUp3 from '../../pages/BusinessAccount/SignUp3'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/masterauth' element={<MasterAuth/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/newusersign' element={<NewUserSign/>} />
    <Route path='/resetpass' element={<ResetPass/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/updatepass' element={<UpdatePass/>} />
    <Route path='/blogin' element={<BLogin/>} />
    <Route path='/signup1' element={<SignUp1/>} />
    <Route path='/signup2' element={<SignUp2/>} />
    <Route path='/signup3' element={<SignUp3/>} />
  </Routes>
};

export default Routers
