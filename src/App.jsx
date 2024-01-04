import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Login from './users/Login'

import Blankfrom from './users/Blankfrom'
import Adminview from './users/Adminview'
import Adminchangepassword from './users/Adminchangepassword'
import Userlist from './users/Userlist'
import Logout from './users/Logout'
// import Profile from './users/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dummy' element={<Blankfrom/>}/>
    <Route path='"/logout' element={<Logout/>}/>
    <Route element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changepassword' element={<Adminchangepassword/>}/>
      <Route path='/adminview' element={<Adminview/>}/>
      <Route path='/userlist' element={<Userlist/>}/>
    </Route>
    </Routes></BrowserRouter>
  )
}

export default App
