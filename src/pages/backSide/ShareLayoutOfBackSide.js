import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './backsideComponent/SideNav'
import Topnav from './backsideComponent/Topnav'
import './style/shareLayout.css'

const ShareLayoutOfBackSide = () => {
  return (
    <div className=' b-container flex-row beige p-abs' >
      <div className='sidebar-container' >
        <SideNav />
      </div>
      <div className='main-container-nav-content' >
        <div className='nav-container' >
          <Topnav />
        </div>
        <div className='b-content' ><Outlet /></div>

      </div>
    </div>
  )
}

export default ShareLayoutOfBackSide
