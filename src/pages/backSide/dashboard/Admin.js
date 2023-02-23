import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNav } from '../backsideComponent'
import css from '../style/shareLayout.css'

const Admin = () => {
  return (
    <div className='b-container flex-column ai-center ac-center ji-center jc-center' >
        <div className='width-100 height-50px' >
            < AdminNav />
        </div>
        <div className='width-100'>
      < Outlet className='width-100' />
      </div>
    </div>
  )
}

export default Admin
