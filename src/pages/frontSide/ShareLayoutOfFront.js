import React from 'react'
import Logo from './images/logo.jpg'
import Navbar from '../frontSide/styles/navbar.css'
import mainStyle from '../frontSide/styles/mainStyle.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { frontEndTopNav } from './frontEndModule'

const ShareLayoutOfFront = () => {
  const navigate = useNavigate()
  return (
    <div className='main' >
      <div className="navMain z-5 ">
        <div className="logo">
          <img className="logoImage" src={Logo} alt="logo" />
        </div>
        <div className="interactables">
          <div className="events">
            <a><button className="events-button" onClick={()=>{navigate('/')}} ><h>Home</h></button></a>
          </div>
          <div className="clubs">
            <a><button className="clubs-button"><h>Clubs</h></button></a>
          </div>
          <div className="news">
            <a><button onClick={()=>{navigate('/update/agenda')}} className="news-button"><h>Update</h></button></a>
          </div>
          <div className="news">
            <a><button onClick={()=>{navigate('/about-us')}} className="news-button"><h>About Us</h></button></a>
          </div>
          <div className="news">
            <a><button onClick={()=>{navigate('/register')}} className="news-button"><h>Login</h></button></a>
          </div>
        </div>
      </div>
      <div className='mainBody'>
        <Outlet />
      </div>
    </div>
  )
}


export default ShareLayoutOfFront
