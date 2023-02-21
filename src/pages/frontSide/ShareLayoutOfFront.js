import React from 'react'
import Logo from './images/logo.jpg'
import Navbar from '../frontSide/styles/navbar.css'
import { Outlet } from 'react-router-dom'


const ShareLayoutOfFront = () => {
  return (
    <div className="navMain">
        <div className="logo">
          <img className="logoImage" src={Logo} alt="logo"/>
        </div>
        <div className="interactables">
          <div className="events">
            <a><button className="events-button"><h>Events</h></button></a>
          </div>
          <div className="clubs">
            <a><button className="clubs-button"><h>Clubs</h></button></a>
          </div>
          <div className="news">
            <a><button className="news-button"><h>News</h></button></a>
          </div>
        </div>
      <Outlet />
    </div>
  )
}


export default ShareLayoutOfFront
