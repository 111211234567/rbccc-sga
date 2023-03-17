import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import css from '../../backSide/style/shareLayout.css'
import ab from '../styles/AboutUs.css'

const AboutUsShareLayout = () => {
  const navigate =useNavigate()
  return (
    <div className='b-container m-t-80px m-x-10 flex-row m-r-30px' >
      <div className='flex-column ai-start jc-center ac-start ji-cenetr m-t-100px m-r-80px' >
        <h1>About Us</h1>
        <div>
          <button onClick={()=>{navigate('/about-us/general')}} className='aboutus-button m-t-10px' >
            Greneral
          </button>
        </div>
        <div>
          <button className='aboutus-button m-t-10px' >
            History
          </button>
        </div>
        <div>
          <button onClick={()=>{navigate('/about-us/executiveBoard')}} className='aboutus-button m-t-10px'>
            Executive board
          </button>
        </div>
        <div>
          <button className='aboutus-button m-t-10px'>
            Administration
          </button>
        </div>
        <div>
          <button className='aboutus-button m-t-10px'>
            Constitution
          </button>
        </div>
        <div>
          <button className='aboutus-button m-t-10px'>
            Contact Us
          </button>
        </div>

      </div>
      <div className='m-t-100px  m-l-30px width-60' >
      < Outlet  />
      </div>
    </div>
  )
}

export default AboutUsShareLayout
