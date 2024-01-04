import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const router = useNavigate("")
    const handleLogout = ()=>{
            sessionStorage.clear("logindata")
        router("/")
    }

  return (
      <div>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}

export default Logout