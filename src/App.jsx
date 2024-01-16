import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Athlete from './users/Athlete'
import Corporation from './users/Corporation'
import View from './users/View'
// import Edit from './users/Edit'
import Login from './admin/Login'
import Logout from './admin/Logout'
import Adminchangepassword from './admin/Adminchangepassword'
import Adminview from './admin/Adminview'
import College from './users/College'
import ViewCollege from './users/ViewCollege'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    {/* <Route path='"/logout' element={<Logout/>}/> */}
    <Route path='/logout' element={<Logout/>}/>
    <Route element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/changepassword' element={<Adminchangepassword/>}/>
          <Route path='/adminview' element={<Adminview/>}/>
      <Route path='/athlete' element={<Athlete/>}/>
      <Route path='/corporation' element={<Corporation/>}/>
      <Route path='/view' element={<View/>}/>
      {/* <Route path='/editdetails' element={<Edit/>}/> */}
      <Route path='/college' element={<College/>}/>
      <Route path='/collegeview' element={<ViewCollege/>}/>
    </Route>
    </Routes></BrowserRouter>
  )
}

export default App
